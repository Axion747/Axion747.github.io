'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Header from "@/components/header"
import Footer from "@/components/footer"

const people = [
  {
    name: 'AIDEN TAN',
    role: 'Founder/Chief Technology Officer',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_9071457cb5e8449286ccc10b80563d1e~mv2.png/v1/crop/x_0,y_681,w_1170,h_1170/fill/w_400,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tan%2CAiden.png',
    bio: 'Aiden Tan is a freshman at the University of Illinois Urbana-Champaign, majoring in Electrical Engineering. A proud graduate of Stuyvesant High School, he has a strong passion for robotics and enjoys building Legos and model kits. In his leisure time, Aiden loves to travel and discover exotic foods from diverse cultures. Aiden is open to new ideas and embraces opportunities to improve his teaching in order to make the greatest impact.',
  },
  {
    name: 'MIKAYLA LIN ',
    role: 'Founder/Chief Operating Officer',
    imageUrl:
      'https://static.wixstatic.com/media/fb7015_515b5f9cc7474d3b9a815e1928666e84~mv2.jpg/v1/crop/x_102,y_0,w_537,h_537/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_9537_edited.jpg',
    bio: 'Mikayla is a first-year student at Harvard University concentrating in Math and Physics where she is exploring her interests in topology, game theory, and black holes. At Harvard, she is involved in the Harvard MIT Math Tournament as community staff, where she helps run the event, building on her experience as Math Team Captain in high school and giving back to the math community. She is especially passionate about supporting girls in math—having started an annual math competition (GEMS) in order to connect girls across the city. Outside of academics, her favorite hobbies are puzzle hunting and competing with the Harvard Ballroom Dance Team, where she is learning how to waltz, foxtrot, and tango!',
  },
  {
    name: 'SAMANTHA TAN',
    role: 'Founder/Chief Administrative Officer',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_ab048629c2714d0486b4d4273b5056bd~mv2.jpg/v1/crop/x_0,y_360,w_2160,h_2160/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Samantha.jpg',
    bio: 'Samantha Tan is a high-achieving junior passionate about healthcare and robotics. As the head of operations on her school&apos;s FIRST Robotics team (Techknights 334), she has mentored hundreds of students through her team. She has also raised thousands of dollars for her team through grantwriting, sponsorships, and fundraising events. She also shadows healthcare workers at an allergy clinic. Outside of academics, she loves to crochet, draw, and read.',
  },
  {
    name: 'THOMAS LIU',
    role: 'Founder/Marketing Director',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_a3b77fcee2cd4f049ece10efa83d3bb3~mv2.jpeg/v1/crop/x_0,y_360,w_1512,h_1512/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/thomas.jpeg',
    bio: 'Thomas Liu lives in New Jersey, where he is a sophomore. He is interested in politics, and discovered debate at the onset of the pandemic. A determined, disciplined, and dedicated go-getter, Thomas quickly rose to become one of the top competitor in his school debate team.  His goal this year is to land a TOC bid in Kentucky.  A mathematics guru, he has also represented his school Math team in many competitions. Thomas has many interests and talents, including piano, violin, basketball and playing video games. His goal in life is to go into business and to make a real difference in the world.',
  },
    {
    name: 'DANIEL LIN',
    role: 'Founder/Outreach Director',
    imageUrl:
      'https://static.wixstatic.com/media/dcd8be_77ff4bca1da34c34ad08c634a7bd5208~mv2.jpeg/v1/crop/x_18,y_0,w_252,h_252/fill/w_353,h_353,al_c,lg_1,q_80,enc_avif,quality_auto/daniel.jpeg',
    bio: 'Daniel Lin attends Early Scholars Speech & Debate where he is one of the debate club&apos;s top debaters. A natural leader, Daniel was President of his elementary school&apos;s Student Council, and is currently captain of the Coding Club. While Daniel plays basketball and Minecraft in his leisure time, his favorite thing to do is read a good book. So if you&apos;re ever looking to discuss a book, he&apos;s the person to see. Daniel also loves math and music, and plays both the piano and the violin.  He takes pride in being well-articulated, enjoys lively debate and politics, and aspires to a future career as a lawyer.',
  },
      {
    name: 'JAYDEN CHEN',
    role: 'Chess Education Director',
    imageUrl:
      'https://static.wixstatic.com/media/3b897c_f73a00bcfb09417f8d559733c1f0bb57~mv2.jpg/v1/crop/x_19,y_0,w_634,h_634/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jayden%20Chan_edited_edited.jpg',
    bio: 'My name is Jayden Chan, and I am a sophomore at the Bronx High School of Science. I practice Brazilian Jiu-Jitsu, Muay Thai, basketball, saxophone, and the guitar. I enjoy playing chess, sharing my expertise and teaching others. I hope to pursue a career in chemical engineering in the future.',
  },
]

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="isolate">
        <Header />
    {/* Team section */}
            <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-sky-500 sm:text-5xl">
                    Founders
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600">
                    They are getting fed. We promise.
                </p>
                </div>
                <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                >
                {people.map((person) => (
                    <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                    <img
                        alt=""
                        src={person.imageUrl}
                        className="aspect-4/5 w-52 flex-none rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                    />
                    <div className="flex-auto">
                        <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                        <p className="text-base/7 text-gray-600">{person.role}</p>
                        <p className="mt-6 text-base/7 text-gray-600">{person.bio}</p>
                    </div>
                    </li>
                ))}
                </ul>
            </div>

            <Footer />
            </div>
          </main>
    )
}