import Title from "@/components/title/title";
import Header from "@/components/navigate/header";
import Education from "@/components/edu/education";
import WorkExperience from "@/components/work/work-experience";
import OtherExperience from "@/components/other/other-experience";
import Skill from "@/components/skill/skill";
import Contact from "@/components/contact/contact";

export default function Home() {
    return (
        <div className="relative flex items-start justify-center w-full ">
            <Header />
            <main className="px-[3%] py-[10%] w-full min-h-screen max-w-[900px] flex flex-col items-center justify-start gap-10  ">
                <Title />
                <WorkExperience />
                <OtherExperience />
                <Education />
                <Skill />
                <Contact />
            </main>
        </div>
    );
}
