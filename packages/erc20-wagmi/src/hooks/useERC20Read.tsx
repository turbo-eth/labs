import { useContractRead, erc20ABI } from 'wagmi';

export function useERC20Read(
  address: string,
  method: string,
  args?: any[]
): any {
  return useContractRead({
    addressOrName: address,
    contractInterface: erc20ABI,
    functionName: method,
    args: args,
  });
}

export default useERC20Read;
