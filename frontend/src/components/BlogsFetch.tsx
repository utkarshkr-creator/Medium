"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from '../../config'
export interface Blog {
  "content": string;
  "title": string;
  "id": string;
  "author": {
    "name": string
  };
  "createdAt": string;
}

export function useBlog({ id }: { id: string }) {
  const [blog, setBlog] = useState<Blog>();
  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(response => {
      setBlog(response.data.blog);
    })
  }, [id])
  return { blog }
}

export default function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(response => {
      setBlogs(response.data.blogs);
    })
  })
  return { blogs }
}
