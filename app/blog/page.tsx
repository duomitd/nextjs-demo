import React from "react";
import blogs from "@/data/blogs.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogListPage() {
  return (
    <div>
      {blogs.map((blog) => (
        <Card
          key={blog.id}
          className="bg-gray-800 shadow-none border-none mb-4"
        >
          <CardHeader>
            <CardTitle>{blog.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{blog.excerpt}</p>
            <Button asChild className="mt-4 bg-pink-600 hover:bg-pink-700">
              <Link href={`/blog/${blog.id}`}>阅读更多</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
