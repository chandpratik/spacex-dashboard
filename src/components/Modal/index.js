import React from 'react';
import ReactDom from 'react-dom';
import { XIcon } from '@heroicons/react/outline';

import { nasa, wiki, yt, comingsoon } from '../../images';
import { useModalContext } from '../../context';

export const Modal = (props) => {
  const {
    mission_name,
    flight_number,
    rocket: {
      rocket_name,
      rocket_type,
      second_stage: { payloads },
    },

    date,
    badge,
    launch_site: { site_name },
    links: { mission_patch_small, wikipedia, article_link, video_link },

    details,
  } = props;

  const { manufacturer, nationality, orbit, payload_type } = payloads[0];
  const { showModal, setShowModal } = useModalContext();
  return ReactDom.createPortal(
    // Outer Modal
    <div className="bg-gray-300 bg-opacity-50 absolute inset-0 flex justify-center items-center z-20">
      {/* Inner Modal */}
      <div className="bg-white border-2 rounded-md px-8 py-4 max-w-max min-w-600 h-auto">
        {/* Modal Header */}
        <div className="flex relative">
          <img
            src={mission_patch_small ? mission_patch_small : comingsoon}
            className="w-16 h-16 mr-2"
            alt="patch"
          />
          <div className="mx-2">
            <span className="text-lg font-medium block">{mission_name}</span>
            <span className="text-sm font-light block my-1">{rocket_name}</span>
            <div className="flex my-2">
              <a href={article_link} target="_blank" rel="noreferrer">
                <img src={nasa} alt="article_link" className="w-5 h-4 mr-1" />
              </a>
              <a href={wikipedia} target="_blank" rel="noreferrer">
                <img src={wiki} alt="wikipedia_link" className="w-5 h-4 mr-1" />
              </a>
              <a href={video_link} target="_blank" rel="noreferrer">
                <img src={yt} alt="yt_link" className="w-5 h-4 mr-1" />
              </a>
            </div>
          </div>
          <div className="mt-0.5">{badge}</div>
          <XIcon
            className="absolute top-1 right-1 z-20 w-4 gray-300"
            role="button"
            onClick={() => setShowModal(!showModal)}
          />
        </div>

        {/*Modal Details */}
        <div className="max-w-2xl max-h-64 py-2">
          <p className="text-sm">
            {details}{' '}
            <a
              href={wikipedia}
              className="text-blue-600 "
              target="_blank"
              rel="noreferrer"
            >
              Wikipedia
            </a>
          </p>
        </div>
        {/* Modal Info */}
        <div>
          <ul>
            <li className="py-2 flex w-full border-b-2 ">
              <span className="pt-0.5 block w-1/2">Flight Number</span>
              <span className="pt-0.5 block w-1/2">{flight_number}</span>
            </li>
            <li className="py-2 flex w-full border-b-2">
              <span className="pt-0.5 block w-1/2">Misson Name</span>
              <span className="pt-0.5 block w-1/2">{mission_name}</span>
            </li>
            <li className="py-2 flex w-full border-b-2">
              <span className="pt-0.5 block w-1/2">Rocket Type</span>
              <span className="pt-0.5 block w-1/2">{rocket_type}</span>
            </li>
            <li className="py-2 flex w-full border-b-2">
              <span className="pt-0.5 block w-1/2">Rocket Name</span>
              <span className="pt-0.5 block w-1/2">{rocket_name}</span>
            </li>
            <li className="py-2 flex w-full border-b-2">
              <span className="pt-0.5 block w-1/2">Manufacturer</span>
              <span className="pt-0.5 block w-1/2">{manufacturer}</span>
            </li>
            <li className="py-2 flex w-full border-b-2">
              <span className="pt-0.5 block w-1/2">Nationality</span>
              <span className="pt-0.5 block w-1/2">{nationality}</span>
            </li>
            <li className="py-2 flex w-full border-b-2">
              <span className="pt-0.5 block w-1/2">Launch Date</span>
              <span className="pt-0.5 block w-1/2">{date}</span>
            </li>
            <li className="py-2 flex w-full border-b-2">
              <span className="pt-0.5 block w-1/2">Payload Type</span>
              <span className="pt-0.5 block w-1/2">{payload_type}</span>
            </li>
            <li className="py-2 flex w-full border-b-2">
              <span className="pt-0.5 block w-1/2">Orbit</span>
              <span className="pt-0.5 block w-1/2">{orbit}</span>
            </li>
            <li className="py-2 flex w-full ">
              <span className="pt-0.5 block w-1/2">Lauch Site</span>
              <span className="pt-0.5 block w-1/2">{site_name}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    document.getElementById('root')
  );
};
