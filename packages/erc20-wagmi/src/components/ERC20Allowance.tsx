import * as React from 'react';
import classNames from 'classnames';
import useERC20Read from '../hooks/useERC20Read';
import { formatBalance } from '../utilities';

interface ERC20AllowanceProps {
  className?: string;
  account?: string;
  spender?: string;
  contractAddress: string;
}

export const ERC20Allowance = ({
  className,
  account,
  spender,
  contractAddress,
}: ERC20AllowanceProps) => {
  const classes = classNames(className, 'ERC20Allowance');
  const { data, isError, isLoading } = useERC20Read(
    contractAddress,
    'allowance',
    [account, spender]
  );
  if (isError || isLoading) return null;
  return <span className={classes}>{formatBalance(data)}</span>;
};

export default ERC20Allowance;
