import type { CodingDojo } from '../../../hardhat/typechain/CodingDojo';


export type NFT =  {
	name: string;
	description: string;
	image: string;
}

const GATEWAY = `https://gateway.ipfs.io/ipfs/`

export async function getNFTsFromContract(contract: CodingDojo): Promise<NFT[]> {
	const result = [];
	const totalSupply = await contract.totalSupply();
	for (let i = 0; i < totalSupply.toNumber(); i++) {
		const uri = await contract.tokenURI(i);
		const response = await fetch(uri.replace('ipfs://', GATEWAY));
		const metadata = await response.json();
		result.push(
			{
				...metadata,
				image: metadata.image.replace('ipfs://', GATEWAY)
			}
		);
	}
	return result;
}
