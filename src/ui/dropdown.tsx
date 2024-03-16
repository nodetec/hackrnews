/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of HackrNews.
 *
 * HackrNews is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HackrNews is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HackrNews. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * luis..f.carvalho20+hackrnews@gmail.com
 */

"use client";

import { ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";

const Dropdown = ({
  options,
  defaultValue,
}: {
  options: string[];
  defaultValue: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown inline-block relative w-64">
      <button
        type="button"
        onClick={toggling}
        className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        <ChevronDownIcon className="w-5 h-5 ml-2" />
        <span className="mr-1">{selectedOption}</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu absolute left-0 mt-2 py-2 w-64 bg-white rounded-lg shadow-xl">
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                onClick={onOptionClicked(option)}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-400"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
