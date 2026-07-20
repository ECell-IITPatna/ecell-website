import React from 'react'
import Image from 'next/image'
import StandoutCards from '@/components/ui/StandoutCards'
const Standout = () => {
    return (
        <>
            {/* Desktop Version */}
            <section className="max-lg:hidden relative h-[110vh] w-full overflow-hidden standout-desktop-container">
                <h1 className="text-5xl font-gugi mx-auto standout-heading p-2">What Makes Us Stand Out <span className="text-blue-500">?</span></h1>

                <div className="reactor-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                    <Image src="/images/arc-reactor.png" alt="arc-reactor" fill className="object reactor" />
                    <div className="glow bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(160,240,255,0.8)_20%,rgba(120,220,255,0.35)_40%,rgba(120,220,255,0)_75%)] w-[320px] h-[320px] scale-[0.5] z-10 opacity-40"/>
                </div>

                <StandoutCards heading="World-Class Infrastructure" description="Modern facilities equipped with cutting-edge technology and collaborative workspaces" css="absolute top-1/5 left-20 w-1/4"/>
                <StandoutCards heading="World-Class Infrastructure" description="Modern facilities equipped with cutting-edge technology and collaborative workspaces" css="absolute top-1/5 right-20 w-1/4"/>
                <StandoutCards heading="World-Class Infrastructure" description="Modern facilities equipped with cutting-edge technology and collaborative workspaces" css="absolute bottom-1/5 left-20 w-1/4"/>
                <StandoutCards heading="World-Class Infrastructure" description="Modern facilities equipped with cutting-edge technology and collaborative workspaces" css="absolute bottom-1/5 right-20 w-1/4"/>
                <div className="absolute top-0 left-0 z-20 h-full w-full overlay bg-white opacity-0"/>
            </section>
            {/* Mobile Version */}
            <section>

            </section>
        </>
    )
}

export default Standout
