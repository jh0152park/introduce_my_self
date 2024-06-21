import Title from "@/components/title/title";
import Header from "@/components/navigate/header";
import Education from "@/components/edu/education";
import WorkExperience from "@/components/work/work-experience";
import OtherExperience from "@/components/other/other-experience";
import Skill from "@/components/skill/skill";

export default function Home() {
    return (
        <div className="flex items-start justify-center w-full">
            <Header />
            <main className="px-[2%] py-[5%] w-full min-h-screen max-w-[900px] flex flex-col items-start justify-start gap-10">
                <Title />
                <WorkExperience />
                <OtherExperience />
                <Education />
                <Skill />
            </main>
        </div>
    );
}
