const stats = [
  { id: 1, name: 'Trabajados y asesorados', value: '+500 clientes' },
  { id: 2, name: 'En procesos de ventas', value: '+$26 millones' },
  { id: 3, name: 'De trabajo y servicios', value: '3 años' },
]

export default function HomeStats() {
  return (
    <section className="bg-fondoDev py-24 sm:py-32 font-luxury">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base font-medium text-gray-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
