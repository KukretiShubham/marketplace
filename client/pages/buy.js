import { useState } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
import { mint } from "../functions/collectionfunction"
const product = {
  images: [
    {
      id: 1,
      name: 'Tier 1',
      src: 'https://ipfs.io/ipfs/bafkreidj4apqxzksqbefleecs4xn2562az64d5bt5m7it2io2jsoipp3x4',
      alt: 'Tier 1',
    },
    {
      id: 2,
      name: 'Tier 2',
      src: 'https://ipfs.io/ipfs/bafkreibkr5iaps3pszxzoob2qw6g4sstnupgh7uyla56rh2ovb3skdpwnm',
      alt: 'Tier 2',

    },
    {
      id: 3,
      name: 'Tier 3',
      src: 'https://ipfs.io/ipfs/bafkreidtq6pkcyy6ywm5hlkbwd7x2t23mk2qvoxtkid5bvpjcbs7am2rmi',
      alt: 'Tier 3',
    }
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>NFTs based on Tiers. Each Tier brings some level of Perks</p>
  `,
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Buy() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const buy = async () => {
    const receipt = await mint(tokenId);
    console.log(receipt);
  };
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {product.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image.name}</span>
                        <span className="absolute inset-0 rounded-md overflow-hidden">
                          <img src={image.src} alt="" className="w-full h-full object-center object-cover" />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-indigo-500' : 'ring-transparent',
                            'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
              {product.images.map((image) => (
                <Tab.Panel key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-center object-cover sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Collection Name</h1>

            <div className="mt-3">
              <h2 className="sr-only">Collection Name</h2>
              <p className="tracking-tight text-3xl text-gray-900">Collection Symbol</p>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className="mt-10">
              <div className="mt-10 flex sm:flex-col1">
                <button
                  type="submit"
                  className="max-w-xs flex-1 bg-[#f3a01b] border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                >
                  Buy
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}
