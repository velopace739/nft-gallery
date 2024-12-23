type Contract = {
  address: string
}

type Collection = {
  name: string,
}

type Image = {
  originalUrl: string
}

export type NFT = {
  collection: Collection,
  contract: Contract,
  tokenId: string,
  image: Image,
  description: string
}

export default function NFTCard({ nft }: { nft: NFT }) {
  return (
    <div className="w-1/4 flex flex-col ">
      <div className="rounded-md">
        <img className="object-cover h-128 w-full rounded-t-md" src={nft.image.originalUrl} ></img>
      </div>
      <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
        <div className="">
          <h2 className="text-xl text-gray-800">{nft.collection.name}</h2>
          <p className="text-gray-600">Id: {nft.tokenId}</p>
          <p className="text-gray-600" >{nft.contract.address}</p>
        </div>

        <div className="flex-grow mt-2">
          <p className="text-gray-600">{nft.description}</p>
        </div>
      </div>

    </div>
  )
}