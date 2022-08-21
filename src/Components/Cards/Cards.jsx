import React from 'react'

const Cards = ({ imagen, titulo, texto }) => {
	return (
		<div
			className='rounded-3xl overflow-hidden box-border shadow-[0_0_20px_0_rgba(62,107,253,0.3)] h-64 px-4 pt-2 pb-5 mx-5 my-2 hover:h-80 transition-[height] duration-500 ease-in-out'
			key={titulo}
		>
			<div className='w-full h-fit my-2 mx-auto px-4'>
				<img
					className='w-14 h-14'
					src={`./image/${imagen}.png`}
					alt={imagen}
				/>
			</div>
			<div className='px-4'>
				<h3 className='text-lg font-semibold h-8 my-0 mx-auto'>
					{titulo}
				</h3>
			</div>
			<div className='h-[100px] px-4 mb-6'>
				<p className='py-1 px-0 leading-snug'>{texto}</p>
			</div>
			<div className='px-4'>
				<div className='my-3 mx-auto text-[#3e6bfd] underline p-4 pb-0 align-baseline'>
					Ver mas...
				</div>
			</div>
		</div>
	)
}

export default Cards
