import Head from 'next/head'
import React from 'react'

export const metadata = {
    title: 'Terms & Conditions',
    description: ''
}

const page = () => {
    return (
        <>
            <main>
                <header className="bg-no-repeat bg-center page__header" style={{ backgroundImage: `url(/global/terms-conditions-banner.webp)` }}>
                    <div className="container">
                        <h1 className="h1 text-white font-bold text-center">Terms & Conditions</h1>
                    </div>
                </header>
                <section className='py-10'>
                    <div className="container">
                        <h2 className='text-lg sm:text-xl font-semibold mt-5 md:mt-7 lg:mt-9 mb-2'>Eligibility:</h2>
                        <p>You must be at least 18 years old and capable of entering into a binding agreement to use the Website. By using the Website, you represent and warrant that you meet these eligibility requirements.</p>


                        <h2 className='text-lg sm:text-xl font-semibold mt-5 md:mt-7 lg:mt-9 mb-2'>Car Reservation:</h2>
                        <ul>
                            <li>  a. The Website allows you to search for and reserve car rentals from various providers. However, the actual rental agreement is between you and the car rental provider. The Website acts as a facilitator in connecting you with the rental providers.</li>
                            <li>b. You acknowledge that the availability, pricing, and terms of the car rentals are subject to change without notice. The Website does not guarantee the availability of any particular car rental or its price.</li>
                        </ul>



                        <h2 className='text-lg sm:text-xl font-semibold mt-5 md:mt-7 lg:mt-9 mb-2'>User Responsibilities:</h2>
                        <ul>
                            <li>a. You are responsible for providing accurate and complete information while using the Website, including personal details, reservation requirements, and payment information.</li>
                            <li>b. You agree not to use the Website for any illegal or unauthorized purposes, and you will comply with all applicable laws and regulations.</li>
                            <li>c. You are solely responsible for any consequences or liabilities arising from the use of the car rental services, including but not limited to accidents, damages, and violations of traffic laws.</li>
                        </ul>

                        <h2 className='text-lg sm:text-xl font-semibold mt-5 md:mt-7 lg:mt-9 mb-2'>Payment:</h2>
                        <ul>
                            <li>a. The Website may require you to provide payment information to reserve a car rental. The payment terms and conditions are determined by the car rental provider. The Website does not store or process payment information directly.</li>
                            <li>b. You agree to pay any applicable fees, charges, and taxes associated with the car rental as determined by the car rental provider.</li>
                            <li>c. The Website may charge a service fee for facilitating the reservation. This fee will be disclosed to you before completing the reservation process.</li>
                        </ul>


                        <h2 className='text-lg sm:text-xl font-semibold mt-5 md:mt-7 lg:mt-9 mb-2'>Cancellation and Modification:</h2>
                        <ul>
                            <li>a. Cancellation and modification policies vary by car rental provider. You are responsible for reviewing and understanding the specific terms and conditions of each reservation.</li>
                            <li>b. The Website may provide cancellation and modification options within the limits allowed by the car rental provider. However, the final decision on cancellations and modifications rests with the car rental provider.</li>
                        </ul>



                        <h2 className='text-lg sm:text-xl font-semibold mt-5 md:mt-7 lg:mt-9 mb-2'>Intellectual Property:</h2>
                        <p>All content and materials on the Website, including text, graphics, logos, images, and software, are the intellectual property of the Website or its licensors. You agree not to reproduce, distribute, modify, or create derivative works of any content without prior written consent from the Website.</p>

                        <h2 className='text-lg sm:text-xl font-semibold mt-5 md:mt-7 lg:mt-9 mb-2'>Disclaimer of Warranties:</h2>
                        <ul>
                            <li>a. The Website provides the car reservation service &apos;as is&apos; and &apos;as available&apos; without any warranties or representations, whether express or implied. The Website disclaims all warranties of any kind, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.</li>
                            <li>b. The Website does not warrant the accuracy, completeness, reliability, or availability of any information or content provided through the Website.</li>
                        </ul>



                        <h2 className='text-lg sm:text-xl font-semibold mt-5 md:mt-7 lg:mt-9 mb-2'>Limitation of Liability:</h2>
                        <ul>
                            <li>a. To the maximum extent permitted by law, the Website and its affiliates, directors, officers, employees, agents, or licensors shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses.</li>
                            <li>b. The total liability of the Website, regardless of the cause of action, shall be limited to the amount paid, if any, by you for the car reservation service during the six months preceding the claim.</li>
                        </ul>


                        <h2 className='text-lg sm:text-xl font-semibold mt-5 md:mt-7 lg:mt-9 mb-2'>Indemnification:</h2>
                        <p>You agree to indemnify, defend, and hold harmless the Website and its affiliates, directors, officers, employees, agents, or licensors from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising out of or related to your use of the Website or any violation of these Terms.</p>

                        <h2 className='text-lg sm:text-xl font-semibold mt-5 md:mt-7 lg:mt-9 mb-2'>Modification of Terms:</h2>
                        <p>The Website reserves the right to modify or update these Terms at any time without prior notice. The revised Terms will be effective upon posting on the Website. Your continued use of the Website after the posting of the revised Terms constitutes your acceptance of such changes.</p>

                    </div>
                </section>
            </main>
        </>
    )
}

export default page
