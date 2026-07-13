import logo from "./logo3.png";
import gradientBackground from "./gradientBackground.png";
import user_group from "./user_group.png";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import profile_img_1 from "./profile_img_1.png";
import arrow_icon from "./arrow_icon.svg";
import { SquarePen, Hash, Image, Eraser, Scissors, FileText } from 'lucide-react'
import ai_gen_img_1 from "./ai_gen_img_1.png";
import ai_gen_img_2 from "./ai_gen_img_2.png";
import ai_gen_img_3 from "./ai_gen_img_3.png";
import {
  FilePenLine,
  Lightbulb,
  Sparkles,
  ImagePlus,
  ScanText,
  WandSparkles,
  FileSearch,
} from "lucide-react";

export const assets = {
    logo,
    gradientBackground,
    user_group,
    star_icon,
    star_dull_icon,
    profile_img_1,
    arrow_icon,
};

export const AiToolsData = [
  {
    title: "AI Article Writer",
    Icon: FilePenLine,
    description: "Generate well-structured, engaging, and SEO-friendly articles on any topic in seconds.",
    bg: "#2563EB", // Royal Blue
    path: "/ai/write-articles",
  },
  {
    title: "Blog Title Generator",
    Icon: Lightbulb,
    description: "Create catchy, click-worthy blog titles that capture attention and drive more readers.",
    bg: "#F59E0B", // Amber
    path: "/ai/blog-titles",
  },
  {
    title: "AI Image Generator",
    Icon: Sparkles,
    description: "Transform your ideas into stunning, high-quality images with the power of AI.",
    bg: "#06B6D4", // Cyan
    path: "/ai/generate-images",
  },
  {
    title: "Background Remover",
    Icon: ImagePlus,
    description: "Remove image backgrounds instantly with AI for clean, professional-quality results.",
    bg: "#10B981", // Emerald
    path: "/ai/remove-background",
  },
  {
    title: "Object Remover",
    Icon: WandSparkles,
    description: "Erase unwanted objects, people, or distractions from your images with precision.",
    bg: "#8B5CF6", // Violet
    path: "/ai/remove-object",
  },
  {
    title: "AI Resume Reviewer",
    Icon: FileSearch,
    description: "Receive AI-powered feedback and actionable suggestions to strengthen your resume.",
    bg: "#EF4444", // Red
    path: "/ai/review-resume",
  },
];

export const dummyTestimonialData = [
    {
        image: assets.profile_img_1,
        name: 'John Doe',
        title: 'Marketing Director, TechCorp',
        content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
        rating: 4,
    },
    {
        image: assets.profile_img_1,
        name: 'Jane Smith',
        title: 'Content Creator, TechCorp',
        content: 'ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.',
        rating: 5,
    },
    {
        image: assets.profile_img_1,
        name: 'David Lee',
        title: 'Content Writer, TechCorp',
        content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
        rating: 4,
    },
]


export const dummyCreationData = [
    {
        "id": 9,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Generate a blog title for the keyword blog in the category Technology.",
        "content": ai_gen_img_1,
        "type": "blog-title",
        "publish": false,
        "likes": [],
        "created_at": "2025-07-01T11:09:50.492Z",
        "updated_at": "2025-07-01T11:09:50.492Z"
    },
    {
        "id": 8,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Generate a blog title for the keyword blog in the category General.",
        "content": ai_gen_img_2,
        "type": "blog-title",
        "publish": false,
        "likes": [],
        "created_at": "2025-07-01T11:08:10.450Z",
        "updated_at": "2025-07-01T11:08:10.450Z"
    },
    {
        "id": 7,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Write an article about AI With Coding in Short (500-800 word).",
        "content": ai_gen_img_3,
        "type": "article",
        "publish": false,
        "likes": [],
        "created_at": "2025-07-01T11:07:51.312Z",
        "updated_at": "2025-07-01T11:07:51.312Z"
    }
]


export const dummyPublishedCreationData = [
    {
        "id": 1,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Generate an image of A Boy is on Boat , and fishing in the style Anime style.",
        "content": ai_gen_img_1,
        "type": "image",
        "publish": true,
        "likes": [
            "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-19T09:02:25.035Z",
        "updated_at": "2025-06-19T09:58:37.552Z",
    },
    {
        "id": 2,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Generate an image of A Boy Riding a bicycle on road and bicycle is from year 2201  in the style Anime style.",
        "content": ai_gen_img_2,
        "type": "image",
        "publish": true,
        "likes": [
            "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-19T08:16:54.614Z",
        "updated_at": "2025-06-19T09:58:40.072Z",
    },
    {
        "id": 3,
        "user_id": "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
        "prompt": "Generate an image of a boy riding a car on sky in the style Realistic.",
        "content": ai_gen_img_3,
        "type": "image",
        "publish": true,
        "likes": [
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-23T11:29:23.351Z",
        "updated_at": "2025-06-23T11:29:44.434Z",
        "__v": 1
    },
]