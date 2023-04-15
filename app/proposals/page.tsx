import { ViewProposals } from "@/components/molecules/ViewProposals";

export default function Page(){
    return(
        <div className="flex justify-around bg-white p-4 ring-1 ring-slate-300 w-full rounded-md mt-6">
            <ViewProposals proposals={undefined} />
        </div>
    )
}