import { join } from "path";
import { readFileSync } from "fs";
import * as yaml from "js-yaml";
import * as _ from "lodash";

const YAML_CONFIG_FILENAME = "config.yaml";

const configPath = join(__dirname, "../config", YAML_CONFIG_FILENAME);
const envPath = join(__dirname, "../config", `config.${process.env.NODE_ENV}.yaml`);

const configYaml = yaml.load(readFileSync(configPath, "utf8")) as Record<string, any>;

const envYaml = yaml.load(readFileSync(envPath, "utf8")) as Record<string, any>;

_.merge(configYaml, envYaml);

export default () => _.merge(configYaml, envYaml);
