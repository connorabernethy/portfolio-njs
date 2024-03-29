import Link from "next/link";
import React from "react";

function Nav(props: any) {
    const { clickFunctions } = props;
    return(
        <div className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                <li>
                    <a className="group flex items-center py-5 active cursor-pointer" onClick={clickFunctions[0]}>
                        <span className="nav-indicator mr-4 h-px w-12 bg-slate-600 transition-all group-hover:w-18 group-hover:bg-slate-200 group-focus-visible:w-24 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                About
                            </span>
                        </span>
                    </a>
                </li>
                <li>
                    <a className="group flex items-center py-5 active cursor-pointer" onClick={clickFunctions[1]}>
                        <span className="nav-indicator mr-4 h-px w-21 bg-slate-600 transition-all group-hover:w-21 group-hover:bg-slate-200 group-focus-visible:w-24 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                Experience
                            </span>
                        </span>
                    </a>
                </li>
                <li>
                    <a className="group flex items-center py-5 active cursor-pointer" onClick={clickFunctions[2]}>
                        <span className="nav-indicator mr-4 h-px w-18 bg-slate-600 transition-all group-hover:w-21 group-hover:bg-slate-200 group-focus-visible:w-24 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                Projects
                            </span>
                        </span>
                    </a>
                </li>
                <li>
                    <a className="group flex items-center py-5 active cursor-pointer" onClick={clickFunctions[3]}>
                        <span className="nav-indicator mr-4 h-px w-18 bg-slate-600 transition-all group-hover:w-21 group-hover:bg-slate-200 group-focus-visible:w-24 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                Certifications
                            </span>
                        </span>
                    </a>
                </li>
                {/* <li>
                    <a className="group flex items-center py-5 active cursor-pointer" onClick={clickFunctions[2]}>
                        <span className="nav-indicator mr-4 h-px w-18 bg-slate-600 transition-all group-hover:w-26 group-hover:bg-slate-200 group-focus-visible:w-26 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                Certifications
                            </span>
                        </span>
                    </a>
                </li> */}
            </ul>
        </div>
    )
}

export default Nav;