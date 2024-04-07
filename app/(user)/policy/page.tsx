import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cstad Ecommerce Web Policy Page',
    description:
        'Cstad Ecommerce Website contact page is the page that we explain abut our rule to our user and our client who visit our website  to make them know about our policy.',
}
export default function PrivacyPolicyPage() {
    return (
        <main className='container mx-auto mt-20 px-4 sm:px-6 lg:px-8 dark:text-white'>
            <h1 className='text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-10'>Privacy Policy</h1>
            <div className='bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg px-6 py-8'>
                <ul className='list-disc pl-5'>
                    <li className='mt-10'>
                        <h2 className='text-lg sm:text-xl lg:text-2xl font-bold mb-4'>Personal Information Collection</h2>
                        <p className='leading-7'>We collect personal information from you when you voluntarily provide it to us through a number of features available on our website. For example, when you register and/or purchase products, we collect personal information which you are asked to provide such as your name, email address, mailing address, and phone number.</p>
                    </li>
                    <li className='mt-10'>
                        <h2 className='text-lg sm:text-xl lg:text-2xl font-bold mb-4'>Use of Your Personal Information</h2>
                        <p className='leading-7'>We use the personal information we collect for various purposes, such as: to provide the services you request; to process, ship and track your order; to communicate with you about the status of your order; to send you promotional materials; to improve our services and enhance your shopping experience; and to do statistical research to help us better understand our audience and reach, as well as to improve our offering.</p>
                    </li>
                    <li className='mt-10'>
                        <h2 className='text-lg sm:text-xl lg:text-2xl font-bold mb-4'>Sharing Your Personal Information</h2>
                        <p className='leading-7'>We do not sell or rent your personal information to third parties. We only disclose your personal information with your prior consent or under the following limited circumstances...</p>
                    </li>
                </ul>
            </div>
        </main>
    );
}