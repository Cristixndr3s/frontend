
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image?: string;
}

const BlogCard = ({ id, title, excerpt, date, author, image }: BlogCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
      {image && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start text-sm text-gray-500 mb-2">
          <span>{author}</span>
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <Link 
          to={`/blog/${id}`}
          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
        >
          Leer más →
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
