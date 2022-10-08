# Troubleshooting

## NET::ERR_CERT_COMMON_NAME_INVALID

<img width="655" alt="Screenshot of SSL certificate error" src="https://user-images.githubusercontent.com/1086421/194705415-2968ab47-d02f-4295-b866-746d2ffe9778.png">

When we get the error that the SSL certificate for the site isn't correct, it's likely because the IP addresses of the Github Pages servers have changed. The steps to resolve are as follows:

1. Look up the latest IPv4 and IPv6 addresses in the [documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain).
2. Update the ascoderu.ca apex DNS A and AAAA records in [Cloudflare](https://dash.cloudflare.com/326ee3f12d4fc88398153bf98f428d7c/ascoderu.ca/dns) to use the new values.
