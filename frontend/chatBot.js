import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-XxOF150XUKap55RLo2N3wEbn",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();