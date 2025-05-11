"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { drops, Drop } from '../data/drops';

const DropGrid: FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {drops.map((drop: Drop, index: number) => (
            <Link href={drop.link} key={index}>
              {/* <a className="group block overflow-hidden"> */}
              <div className="relative h-64 w-full">
                <Image
                  src={drop.image}
                  alt={drop.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-indigo-600">
                {drop.title}
              </h3>
              {/* </a> */}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DropGrid;
