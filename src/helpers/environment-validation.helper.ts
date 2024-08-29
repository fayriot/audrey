export const ENV_VARIABLES = ['SOURCE'] as const;

export const getEnvString = (scheme: typeof ENV_VARIABLES = ENV_VARIABLES) => {
    let result = `Node.js: ${process.version}\n`;
    result += `NAME: ${process.env.npm_package_name}\n`;
    result += `VERSION: ${process.env.npm_package_version}\n`;

    scheme.forEach((i) => {
        result += `${i}: ${process.env[i]}\n`;
    });

    return result;
};
