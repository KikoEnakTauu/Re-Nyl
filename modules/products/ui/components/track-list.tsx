"use client";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Music } from "lucide-react";
interface Props {
  id: string;
}

export const TrackList = ({ id }: Props) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.products.getOne.queryOptions({
      id,
    })
  );

  return (
    <div className="max-w-6xl mx-auto mt-12">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Track List
        </h2>

        {data.tracks.length === 0 ? (
          <div className="border border-gray-400 border-dashed flex items-center justify-center p-8 flex-col gap-y-4 bg-white w-full rounded-lg">
            <Music />
            <p className="text-base font-medium">No tracks found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {data.tracks.map((track, index) => (
              <div
                key={track.id}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-500 w-6">
                    {index + 1}.
                  </span>
                  <span className="text-gray-900">{track.title}</span>
                </div>
                <span className="text-sm text-gray-500">{track.duration}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
