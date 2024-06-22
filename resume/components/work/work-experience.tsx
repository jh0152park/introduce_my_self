import PointDot from "../common/point-dot";
import { WORK_EXPERIENCE } from "@/global/experience";

export default function WorkExperience() {
    const works = WORK_EXPERIENCE;

    return (
        <div className="flex flex-col items-start justify-start w-full">
            <div className="flex items-start justify-start my-20 text-4xl font-bold sm:text-5xl">
                <span>Work Experience</span>
                <PointDot />
            </div>

            <div className="flex flex-col items-start justify-start gap-10">
                {works.map((work) => (
                    <div
                        key={work.company}
                        className="flex flex-col items-start justify-start w-full gap-5 sm:flex-row sm:gap-0"
                    >
                        <div className="flex flex-col items-start justify-start sm:w-[50%] w-full">
                            <div className="flex flex-col items-start justify-start *:font-bold text-4xl">
                                {work.company.split(" ").map((company) => (
                                    <div
                                        key={company}
                                        className="flex items-start justify-start"
                                    >
                                        <span key={company}>{company}</span>
                                        {company === "무선사업부" && (
                                            <PointDot />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col items-start justify-start mt-5 *:font-semibold">
                                <span>{work.as}</span>
                                <span>{work.period}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                            {work.mission.map((misson) => (
                                <div
                                    key={misson.title}
                                    className="flex flex-col items-start justify-start w-full gap-10 mb-10"
                                >
                                    <span className="text-2xl font-bold sm:text-3xl text-dark">
                                        {misson.title}
                                    </span>

                                    <div className="flex flex-col items-start justify-start gap-2">
                                        <span className="text-xl font-bold">
                                            Description
                                        </span>
                                        <span className="text-sm sm:text-md ">
                                            {misson.description}
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-start justify-start gap-2">
                                        <span className="text-xl font-bold">
                                            What I did
                                        </span>
                                        {misson.worked.map((work) => (
                                            <div
                                                key={work}
                                                className="flex items-center justify-start gap-1 text-sm sm:text-md"
                                            >
                                                <PointDot />
                                                <span>{work}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col items-start justify-start gap-2">
                                        <span className="text-xl font-bold">
                                            Tech Stack
                                        </span>

                                        <div className="flex items-center justify-start gap-3 text-sm sm:text-md">
                                            {misson.tech.map((tech) => (
                                                <span key={tech}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
