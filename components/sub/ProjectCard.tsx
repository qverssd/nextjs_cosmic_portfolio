import React from "react";
import Image from "next/image";

interface Props {
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#3c138d]">
            <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
            />

            <div className="relative p-4">
                <h1 className="text-2x1 font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;