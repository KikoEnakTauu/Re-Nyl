"use client";
import { Genre } from "@/payload-types";
import { GenreButton } from "./GenreButton";
import { useParams } from "next/navigation";
interface Props {
  data: any;
}

export const GenreFilters = ({ data }: Props) => {
  const params = useParams();

  const genreParam = params.genre as string | undefined
  const activeGenre = genreParam || "all"

  return (
    <div className="flex gap-5">
      {data.map((genre: Genre) => (
        <div key={genre.id}>
          <GenreButton data={genre} isActive={genre.slug === activeGenre}/>
        </div>
      ))}
    </div>
  );
};
