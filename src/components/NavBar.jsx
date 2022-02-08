import React, { useState, useEffect } from 'react';
import { SiCodeigniter } from 'react-icons/si';
import { applyTheme } from '../themes/themeutil';
import useComponentVisible from '../themes/TouchBehaviour';
import ThemeSelect from './ThemeSelect';

function NavBar() {
  const [selected, setselected] = useState('creamRose');
  const [toggle, settoggle] = useState(false);
  const { ref } = useComponentVisible(false, toggle, settoggle);


  useEffect(() => {
    setselected(selected)
    applyTheme(selected)
  }, [selected])


  return (
    <header class="shadow-sm">
      <div class="flex items-center justify-between text-primary-text h-16 max-w-screen-xl px-4 mx-auto">
        <div class="flex flex-1 w-0 lg:hidden">
          <div class="flex items-center space-x-4">
            <SiCodeigniter size={30} className='text-primary' />
            <p className='font-mono font-bold'>Yuva</p>
          </div>
        </div>
        <div class="flex justify-end flex-1 w-0 lg:hidden">

        </div>
        <div class="lg:flex items-center hidden space-x-4">
          <SiCodeigniter size={30} className='text-primary' />
          <p className='font-mono font-bold'>Yuva</p>
        </div>
        <nav class="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0">
          <a class="text-gray-900" href="#about">About</a>
          <a class="text-gray-900" href="#Experience">Experience</a>
          <a class="text-gray-900" href="#skills">Skills</a>
          <a class="text-gray-900" href="#project">Projects</a>
          <a class="text-gray-900" href="#contact">Contact</a>
        </nav>
        <div ref={ref} className='m-2 flex items-center mr-4  '>
          <div className='flex flex-col items-center '>
            <ThemeSelect
              selected={selected}
              setselected={setselected}
              toggle={toggle}
              settoggle={settoggle}
            />
          </div>
        </div>
      </div>
      <div class="border-t border-gray-100 lg:hidden">
        <nav class="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium">
          <a class="flex-shrink-0 pl-4 text-gray-900" href="#about">About</a>
          <a class="flex-shrink-0 pl-4 text-gray-900" href="#Experience">Skills</a>
          <a class="flex-shrink-0 pl-4 text-gray-900" href="#skills">Experience</a>
          <a class="flex-shrink-0 pl-4 text-gray-900" href="#project">Projects</a>
          <a class="flex-shrink-0 pl-4 text-gray-900" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default NavBar;
