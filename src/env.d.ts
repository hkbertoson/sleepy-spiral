/// <reference types="astro/client" />

type KVNamespace = import('@cloudflare/workers-types').KVNamespace;
type ENV = {
	KV_LEGACY: KVNamespace;
};

type Runtime = import('@astrojs/cloudflare').AdvancedRuntime<ENV>;

declare namespace App {
	interface Locals extends Runtime {}
}
