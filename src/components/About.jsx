import React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
      name: 'UX/UI Design',
      description:
        'Figma, Trello, GitHub Project, TailWind CSS, MaterialUI, Bootstrap, HTML5.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'JavaScript / Web Development',
      description:
        'ES6, Functional programming, Higher-Order Functions, Object-Oriented Programming, DOM Manipulation, jQuery, Fetch API, Axios',
      icon: LockClosedIcon,
    },
    {
      name: 'ReactJS',
      description:
        'React Hooks, Functional Components, JSX, State Management.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Software Development Lifecycle',
      description:
        'Agile methodology: Standup, Kanban, Scrum, Requirement backlog management, Sprints.',
      icon: FingerPrintIcon,
    },
  ]

function About() {

    return (
        <div className="bg-white py-24 sm:py-32" id='about'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ABOUT ME
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          I have good track-record of working in a team in fast-paced environments and able to manage own workload. I am a great collaborator and excellent communicator.
         </p>
         <p className="mt-6 text-lg leading-8 text-gray-600">
          Here are the skills I&apos;ve developed and have been working with recently:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    )
}

export default About;