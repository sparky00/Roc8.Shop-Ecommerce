import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";

const Address = ({ checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, SetShippingOptions] = useState([]);
  const [shippingOption, SetShippingOption] = useState("");


  const countries = Object.entries(shippingCountries).map(([code, nam])=>({ id: code, label: nam}));
//   console.log("countries",countries)
const subdivisions = Object.entries(shippingSubdivisions).map(([code, nam])=>({ id: code, label: nam}));
//   console.log("subdivisions",subdivisions)

const options = shippingOptions.map((sO)=>({id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})`}))


  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    console.log(countries);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    console.log(subdivisions);
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
    const { options } = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region});

    console.log(options);
    // SetShippingOptions(options);
    SetShippingOption(options[0].id); 
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(()=>{
   if(shippingCountry) fetchSubdivisions(shippingCountry);
  },[shippingCountry]);
   
  useEffect(()=>{
    if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
   },[shippingSubdivision]);


  return (
    <div className="px-5 py-6 text-gray-900 md:px-8">
      <div className="flow-root">
        <div className="-my-6 divide-y divide-gray-200">
          <div className="py-6">
            <h2 className="text-base  font-bold">Contact Information</h2>

            <form action="#" className="mt-6">
              <div className="space-y-5">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <input
                    className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    id="first_name"
                    placeholder="First Name"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                  <input
                    className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    id="last_name"
                    placeholder="Last Name"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="address"
                    id="address"
                    placeholder="Address"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="city"
                    id="city"
                    placeholder="City"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="zip"
                  >
                    Zip
                  </label>
                  <input
                    className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="zip"
                    id="zip"
                    placeholder="Zip"
                  />
                </div>
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Shipping Country
                </label>
                <select
                value={shippingCountry}
                onChange={(e)=> setShippingCountry(e.target.value)}
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {countries.map((country)=>(
                    <option key={country.id} value={country.id}>
                        {country.label}
                        </option>
                  ))}
                </select>
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Shipping State
                </label>
                <select
                value={shippingSubdivision}
                onChange={(e)=> setShippingSubdivision(e.target.value)}
                  id="states"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {subdivisions.map((subdivision)=>(
                    <option key={subdivision.id} value={subdivision.id}>
                        {subdivision.label}
                        </option>
                  ))}
                </select>
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Shipping Options
                </label>
                <select
                value={shippingOption}
                onChange={(e)=> SetShippingOption(e.target.value)}
                  id="options"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {options.map((option)=>(
                    <option key={option.id} value={option.id}>
                        {option.label}
                        </option>
                  ))}
                </select>
                <div>
                  <button
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="py-6">
            <h2 className="text-base font-bold text-gray-500">
              Payment Method
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
