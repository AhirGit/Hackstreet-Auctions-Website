import { userCardContent } from './userCardContent';

function Users() {
  return (
    <div>
      <main id='users'>
        <div className='container mx-auto my-30'>
            <div className='text-center text-5xl font-bold py-11'>
                <h1>
                    Is this for you?
                </h1>
            </div>
            <div>
                <section className='px-8 bg-[#D3E7F5] rounded-xl text-black'>
                    <div className='grid grid-rows-2 grid-cols-2 md:grid-cols-2
                                        lg:grid-cols-2'>
                        {userCardContent.map((user) => (
                            <div className='py-8'>
                                <h1 className="text-xl lg:text-2xl font-bold text-shadow-black text-shadow-2xs">
                                    {user.title}
                                </h1>
                                <p className="py-4 leading-relaxed">
                                    {user.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Users
