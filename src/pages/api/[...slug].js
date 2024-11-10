import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware';

export const config = { api: { externalResolver: true, bodyParser: false, }, };

// Create proxy instance outside of request handler function to avoid unnecessary re-creation
const apiProxy = createProxyMiddleware({
    target: process.env.NEXT_PUBLIC_CORREOS_URL,
    changeOrigin: true,
    pathRewrite: { [`^/api/proxy`]: '' },
    secure: false,
    onProxyReq: fixRequestBody
});

export default function (req, res) {
    apiProxy(req, res, (result) => {
        if (result instanceof Error) {
            throw result;
        }

        throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`);
    });
};