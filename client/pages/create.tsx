import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { createNewCollection } from "../functions/factoryFunctions"
export default function Create() {

    const [CollectionName, setCollectionName] = useState({ collectionName: ''})
    const [CollectionSymbol, setCollectionSymbol] = useState({ collectionSymbol: ''})
    const [Whitelistedfrens, setWhitelistedfrens] = useState({ whitelistedfrens: ''})
    const [TierURIs, setTierURIs] = useState({ tierURIs: ''})
    const create = async () => {
        const whitelistedfrensArray = Whitelistedfrens.whitelistedfrens.split(",")
        const TierURIsArray = TierURIs.tierURIs.split(",")
        const receipt = await createNewCollection(CollectionName.collectionName, CollectionSymbol.collectionSymbol,whitelistedfrensArray, TierURIsArray);
        console.log(receipt);
      };
    return (
      <div className="">
        <form className="space-y-8 divide-y divide-white m-10">
          <div className="space-y-8 divide-y divide-white sm:space-y-5">
            <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div>
                <h3 className="text-lg leading-6 font-medium text-white">Collection Information</h3>
                <p className="mt-1 max-w-2xl text-sm text-white">Create Your Panchayat Compatible Collection in NO Time.</p>
              </div>
              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-white sm:pt-5">
                  <label htmlFor="first-name" className="block text-sm font-medium text-white sm:mt-px sm:pt-2">
                    Collection Name
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="Collection Name"
                      id="collection-name"
                      autoComplete="given-name"
                      placeholder="Enter Collection Name"
                      className="max-w-lg block w-full shadow-sm sm:max-w-xs sm:text-sm border-white rounded-md"
                      onChange={e => setCollectionName({ ...CollectionName, collectionName: e.target.value })}
                    />
                  </div>
                </div>
    
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-white sm:pt-5">
                  <label htmlFor="last-name" className="block text-sm font-medium text-white sm:mt-px sm:pt-2">
                    Collection Symbol
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="Collection Symbol"
                      id="collection-symbol"
                      autoComplete="family-name"
                      placeholder="Enter Collection Symbol"
                      className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-white sm:max-w-xs sm:text-sm border-white rounded-md"
                      onChange={e => setCollectionSymbol({ ...CollectionSymbol, collectionSymbol: e.target.value })}
                    />
                  </div>
                </div>
    
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="email" className="block text-sm font-medium text-white sm:mt-px sm:pt-2">
                    Whitelisted Frens
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      id="whitelisted-frens"
                      name="Whitelisted Frens"
                      type="text"
                      autoComplete="email"
                      placeholder="Enter Whitelisted Frens Addresses separated by comma"
                      className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-white rounded-md"
                      onChange={e => setWhitelistedfrens({ ...Whitelistedfrens, whitelistedfrens: e.target.value })}
                    />
                  </div>
                </div>    
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-white sm:pt-5">
                  <label htmlFor="street-address" className="block text-sm font-medium text-white sm:mt-px sm:pt-2">
                    Tier URIs
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="tier uris"
                      id="tier-uri"
                      autoComplete="street-address"
                      placeholder="Enter Tier URIs separated by comma"
                      className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-white sm:text-sm border-white rounded-md"
                      onChange={e => setTierURIs({ ...TierURIs, tierURIs: e.target.value })}
                    />
                  </div>
            
                </div>    
              </div>
            </div>
          </div>
    
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={create}>
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
  