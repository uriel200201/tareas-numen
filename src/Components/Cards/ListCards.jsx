import React from 'react'
import Cards from './Cards'

const ListCards = () => {
	return (
		<div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5'>
			<Cards
				imagen={'Cuenta'}
				titulo={'Cuenta y Tarjeta'}
				texto={`Cómo administrar la cuenta y claves. Consultas sobre uso, seguimiento o reposición de la tarjeta.`}
			/>
			<Cards
				imagen={'App'}
				titulo={'La App'}
				texto={`Sobre las funcionalidades de la app: cargas, transferencias, pagos, recargas y beneficios.`}
			/>
			<Cards
				imagen={'Tarjeta'}
				titulo={'Productos'}
				texto={`Temas relacionados a Ualá Bis, Inversiones, Créditos, Seguros y Asistencias WTW.`}
			/>
			<Cards
				imagen={'Offtopic'}
				titulo={'Zona relax'}
				texto={`Espacio donde nos conocemos, interactuamos y jugamos.`}
			/>
		</div>
	)
}

export default ListCards
