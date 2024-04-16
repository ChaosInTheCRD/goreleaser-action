import * as os from 'os';

export const osPlat: string = os.platform();
export const osArch: string = os.arch();

export interface Inputs {
  distribution: string;
  version: string;
  args: string;
  workdir: string;
  installOnly: boolean;
}

export function getInputs(): Inputs {
  return {
    distribution: process.env.DISTRIBUTION || 'goreleaser',
    version: process.env.VERSION || 'latest',
    args: process.env.ARGS || '',
    workdir: process.env.WORKDIR || '.',
    installOnly: process.env.INSTALL_ONLY === 'true'
  };
}
