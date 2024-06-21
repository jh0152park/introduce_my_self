import Education from "@/components/edu/education";
import Header from "@/components/navigate/header";
import Title from "@/components/title/title";
import WorkExperience from "@/components/work/work-experience";

export default function Home() {
    return (
        <div className="flex items-start justify-center w-full">
            <Header />
            <main className="px-[2%] py-[5%] w-full h-screen max-w-[900px] ">
                <Title />
                <WorkExperience />
                <Education />
            </main>
        </div>
    );
}
