import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <Link
                href="https://colab.research.google.com/drive/1-zWDaCMqtg4vR5NFM-l_2CNiHrO2zuOK?usp=sharing"
                className="underline text-sm md:text-xl text-center"
                target="_blank"
            >
                Get the Notebook
            </Link>
            <Link
                href="/presentations/LangChain_Workshop_Presentation.pdf"
                className="underline text-sm md:text-xl text-center"
                target="_blank"
            >
                Download the Presentation
            </Link>
            <Link
                href="https://plakshauniversity1-my.sharepoint.com/:b:/g/personal/vardhaman_k_ug23_plaksha_edu_in/EfaZopMHO5hKo438ESIs66IBKr5sMRIfuFgn4nNVtoeNsA?e=AxjCwU"
                className="underline text-sm md:text-xl text-center"
            >
                Post Workshop Content
            </Link>
            <Link
                href="https://colab.research.google.com/drive/1YqDckDFDakpaW56i_tYPxue2crzu12QF?usp=sharing"
                className="underline text-sm md:text-xl text-center"
            >
                Get complete Notebook
            </Link>
            <hr></hr>
            <Link
                href="https://www.langchain.com/"
                className="underline text-sm md:text-xl text-center"
            >
                Discover LangChain&apos;s Website
            </Link>
        </div>
    );
}
