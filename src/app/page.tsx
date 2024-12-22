'use client'
import { useState } from 'react'

export default function Home() {
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <input
          type={"text"}
          placeholder="Add your wallet address"
          className="py-2 px-1.5 outline outline-1"
          onChange={(e) => { setWalletAddress(e.target.value) }}
          value={wallet}
        />
        <input
          type={"text"}
          placeholder="Add the collection address"
          className="py-2 px-1.5 outline outline-1"
          onChange={(e) => { setCollectionAddress(e.target.value) }}
          value={collection}
        />
        <label className="text-gray-600 ">
          <input type={"checkbox"} className="mr-2"></input>
          Fetch for collection
        </label>
        <button className={"disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"}>Let's go! </button>
      </div>
    </div>
  );
}
