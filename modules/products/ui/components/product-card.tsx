interface ProductCardProps {
    id: string;
    name: string;
    imageUrl: string;
    authorUsername: string;
    authorImageUrl?: string | null;
    reviewRating: number;
    reviewCount: number;
    price: number;
}