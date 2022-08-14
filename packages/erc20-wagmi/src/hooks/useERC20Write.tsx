import { useContractWrite, erc20ABI, usePrepareContractWrite } from 'wagmi';

export function useERC20Write(
  address: string,
  method: string,
  args: any[],
  overrides?: any,
  configs?: any
): any {
  const { config } = usePrepareContractWrite({
    addressOrName: address,
    contractInterface: erc20ABI,
    functionName: method,
    args: args,
    overrides: overrides,
    ...configs
  })
  return useContractWrite(config)
}

export default useERC20Write;
