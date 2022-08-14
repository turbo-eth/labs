import {
  ERC20Balance,
  ERC20Name,
  ERC20Symbol,
  ERC20Decimals,
  WalletERC20Balance,
} from "@turbo-eth/erc20-wagmi";

import ModuleComponentPreview from "@/components/ModuleComponentPreview";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
// import { MintTokenButton } from "@turbo-lab/framework";

const Index = () => {
  const add = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="dark: mx-auto bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200 py-32 text-center text-neutral-500 shadow-sm dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 dark:text-white">
        <h1 className="m-0 mb-0 text-3xl font-bold text-slate-800 dark:text-slate-200">
          ERC20 Module
        </h1>
        {/* <MintTokenButton
          address={contract?.address}
          amount="1"
          className="mt-4 inline-block p-4 bg-blue-500 rounded-lg"
        /> */}
      </div>
      <section className="py-20">
        <div className="container mx-auto max-w-screen-xl">
          <Examples address={add} />
        </div>
      </section>
    </Main>
  );
};

const Examples = ({ address }) => {
  const examples = [
    {
      title: "ERC20Name",
      code: <ERC20Name contractAddress={address} />,
      url: "https://github.com/turbo-eth/turbo-eth/blob/main/packages/erc20-wagmi/src/components/ERC20Name.tsx",
    },
    {
      title: "ERC20Symbol",
      code: <ERC20Symbol contractAddress={address} />,
      url: "https://github.com/turbo-eth/turbo-eth/blob/main/packages/erc20-wagmi/src/components/ERC20Symbol.tsx",
    },
    {
      title: "ERC20Symbol",
      code: <ERC20Decimals contractAddress={address} />,
      url: "https://github.com/turbo-eth/turbo-eth/blob/main/packages/erc20-wagmi/src/components/ERC20Symbol.tsx",
    },
    {
      title: "ERC20Balance(0x000...000)",
      code: (
        <ERC20Balance
          userAddress="0x0000000000000000000000000000000000000000"
          contractAddress={address}
        />
      ),
      url: "https://github.com/turbo-eth/turbo-eth/blob/main/packages/erc20-wagmi/src/components/ERC20Balance.tsx",
    },
    {
      title: "WalletERC20Balance",
      code: <WalletERC20Balance msgActive contractAddress={address} />,
      url: "https://github.com/turbo-eth/turbo-eth/blob/main/packages/erc20-wagmi/src/components/WalletERC20Balance.tsx",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-6">
      {examples.map((exm, idx) => (
        <ModuleComponentPreview key={idx} {...exm} className="col-span-6" />
      ))}
    </div>
  );
};

export default Index;
