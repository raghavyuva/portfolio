import React from 'react';
import { WorkShow } from '../static/Index';

const Projects = () => {
    return <div id='project' className='text-primary-text flex justify-center flex-col'>
        <div className="flex flex-col pl-3">
            <span className="text-2xl font-semibold   capitalize">
                Some of my works.
            </span>
            <span className="   pt-3 ">
                Check out some of the works I made at freelancing, company projects and even case studies.
            </span>
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
            {
                WorkShow?.works?.map((work) => {
                    return (
                        <ProjectCard
                            description={work.project_description}
                            goto={work.linkto}
                            title={work.name}
                            img={work.image}
                        />
                    )
                })
            }
        </div>
    </div>;
};

export default Projects;
function ProjectCard({
    img,
    title,
    description,
    goto
}) {
    return (
        <a
            class="block text-primary-text overflow-hidden border border-secondary rounded-lg  max-w-sm m-2 shadow-xl"
            href=""
        >
            <img
                class="object-contain w-full h-56"
                src={img ? img : "https://www.hyperui.dev/photos/team-1.jpeg"}
                alt=""
            />
            <div class="p-6">
                <h5 class="text-xl font-bold">
                    {title}
                </h5>
                <p class="mt-2 text-sm text-gray-500">
                    {description}
                </p>
                <a
                    class="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 "
                    href={goto}
                >
                    Learn More!
                    <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </a>
    )
}