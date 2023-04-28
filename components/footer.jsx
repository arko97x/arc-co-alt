import ReactLoading from "react-loading"

const Footer = () => {
    return (
        <div className="px-8 sm:px-[5vw] md:px-[12vw] lg:px-[20vw] xl:px-[28vw] 2xl:px-[30vw]">
            <div className="px-8 pt-8 pb-0 bg-yellow-300 border border-yellow-400 rounded-lg flex flex-col sm:flex-row space-y-32 sm:space-y-0 justify-between">
                <div className="mb-8 w-full sm:w-1/2 items-start flex flex-col space-y-4 text-sm">
                    <div className="text-yellow-800 font-light">© <span id="year">{new Date().getFullYear()}</span> | all rights (and lefts) reserved.<br />
                        this digital garden is being built by yours truly, with love and care, in Bangalore.</div>
                    <div className="flex flex-row flex-wrap justify-start items-center">
                        <a href="mailto:arkopublic@gmail.com"
                            className="group font-medium text-blue-900 transition duration-300 pr-2">
                            Email
                            <span
                                className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-900"></span>
                        </a>
                        <div className='pr-2 text-yellow-800'>·</div>
                        <a href="https://www.linkedin.com/in/arkoprabho-bhattacharjee/" target="_blank"
                            rel="noopener noreferrer" className="group font-medium text-blue-900 transition duration-300 pr-2">
                            LinkedIn
                            <span
                                className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-900"></span>
                        </a>
                        <div className='pr-2 text-yellow-800'>·</div>
                        <a href="https://www.instagram.com/arccc.co/" target="_blank" rel="noopener noreferrer"
                            className="group font-medium text-blue-900 transition duration-300 pr-2">
                            Instagram
                            <span
                                className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-900"></span>
                        </a>
                        <div className='pr-2 text-yellow-800'>·</div>
                        <a href="https://arccc.co/shop" target="_blank" rel="noopener noreferrer"
                            className="group font-medium text-blue-900 transition duration-300 pr-2">
                            Shop
                            <span
                                className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-900"></span>
                        </a>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 h-auto relative flex justify-end">
                    <div className="w-full">
                        <div className="absolute left-[1.93rem] bottom-0 border-l border-green-600 h-[6.8rem]"></div>
                        <div className="absolute left-[3.6rem] bottom-0 border-l border-green-600 h-[3rem]"></div>
                        <div className="absolute left-[4.93rem] bottom-0 border-l border-green-600 h-[4.8rem]"></div>
                        <div className="absolute left-[6.9rem] bottom-0 border-l border-green-600 h-[2.8rem]"></div>
                        <div className="absolute left-[6.3rem] bottom-0 border-l border-green-600 h-[5.6rem]"></div>
                        <div className="absolute left-[8.9rem] bottom-0 border-l border-green-600 h-[0.8rem]"></div>
                        <div className="absolute left-[9.4rem] bottom-0 border-l border-green-600 h-[4rem]"></div>
                        <div className="absolute left-[10.9rem] bottom-0 border-l border-green-600 h-[2.8rem]"></div>
                        <div className="absolute left-[13.8rem] bottom-0 border-l border-green-600 h-[0.8rem]"></div>
                        <div className="absolute left-[13rem] bottom-0 border-l border-green-600 h-[4.9rem]"></div>
                        <div className="absolute left-[14.9rem] bottom-0 border-l border-green-600 h-[6.4rem]"></div>
                        <div className="absolute left-[16.6rem] bottom-0 border-l border-green-600 h-[5.7rem]"></div>
                        <div className="absolute left-[15.95rem] bottom-0 border-l border-green-600 h-[2.1rem]"></div>
                        <ReactLoading type='spokes' color='#7209B7' height={30} width={30} className='absolute bottom-[7.07rem] left-[0.98rem]' />
                        <ReactLoading type='spinningBubbles' color='#F72585' height={20} width={20} className='absolute bottom-[5.07rem] left-[0.98rem]' />
                        <ReactLoading type='spin' color='#F72585' height={30} width={30} className='absolute bottom-[1.07rem] left-[0.98rem]' />
                        <ReactLoading type='spokes' color='#7209B7' height={30} width={30} className='absolute bottom-[3.40rem] left-[2.65rem]' />
                        <ReactLoading type='spin' color='#D62828' height={30} width={30} className='absolute bottom-[5.20rem] left-[4.00rem]' />
                        <ReactLoading type='spokes' color='#7209B7' height={30} width={30} className='absolute bottom-[6.00rem] left-[5.40rem]' />
                        <ReactLoading type='spokes' color='#D62828' height={30} width={30} className='absolute bottom-[3.20rem] left-[5.99rem]' />
                        <ReactLoading type='spinningBubbles' color='#7209B7' height={30} width={30} className='absolute bottom-[1.14rem] left-[8.04rem]' />
                        <ReactLoading type='spin' color='#D62828' height={30} width={30} className='absolute bottom-[4.38rem] left-[8.54rem]' />
                        <ReactLoading type='spinningBubbles' color='#7209B7' height={30} width={30} className='absolute bottom-[3.08rem] left-[10.03rem]' />
                        <ReactLoading type='spokes' color='#D62828' height={30} width={30} className='absolute bottom-[5.18rem] left-[12.14rem]' />
                        <ReactLoading type='spin' color='#F72585' height={30} width={30} className='absolute bottom-[1.14rem] left-[12.88rem]' />
                        <ReactLoading type='spin' color='#B5179E' height={30} width={30} className='absolute bottom-[6.58rem] left-[14.06rem]' />
                        <ReactLoading type='spokes' color='#7209B7' height={30} width={30} className='absolute bottom-[5.88rem] left-[15.64rem]' />
                        <ReactLoading type='spokes' color='#B5179E' height={30} width={30} className='absolute bottom-[2.44rem] left-[15.08rem]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer