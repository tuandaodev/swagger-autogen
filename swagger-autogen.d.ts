// Main function
declare function swaggerAutogen(args?: any, endpointsFiles?: any, data?: any): (outputFile: any, endpointsFiles: any, data?: any) => Promise<false | {
    success: boolean;
    data: any;
}>;

// Export all functions from code-parser
declare namespace swaggerAutogen {
    function getUntil(data: string, character: string, ignoreInString?: boolean): string;
    function getVariablesNode(node: any): any;
    function jsParser(data: string): any;
    function jsParserEsModule(data: string, onlyPrimitiveTypes?: boolean): Promise<any>;
    function removeCharacter(data: string, character: string, ignoreInString?: boolean): string;
    function resolvePathVariables(rawPath: string, bytePosition: number, jsParsed: any, importedFiles: any[]): Promise<string>;
    function resolveVariableValue(node: any, variables: any[]): any;
    function searchInObject(obj: any, property: string): any;

    // Export all functions from handle-data
    function clearData(data: string, imports?: any): Promise<string>;
    function removeComments(data: string, keepSwaggerTags?: boolean): Promise<string>;
    function removeStrings(data: string): Promise<string>;
    function addReferenceToMethods(data: string, patterns: string[]): Promise<string>;
    function getQueryIndirectly(elem: string, request: string[], objParameters: any): any;
    function getStatus(elem: string, response: string[], objResponses: any): Promise<any>;
    function getHeader(elem: string, path: string, method: string, response: string[], objEndpoint: any): any;
    function getHeaderQueryBody(elem: string, request: string[], objParameters: any, opt: any): any;
    function getCallbackParameters(data: string): Promise<{ req: string[]; res: string[]; next: string[] }>;
    function getPathParameters(path: string, objParameters: any): Promise<any>;
    function functionRecognizerInData(data: string, functionName: string, imports?: any): Promise<string | null>;
    function popFunction(data: string): Promise<string | null>;
    function getSwaggerComments(data: string): Promise<string>;
    function removeInsideParentheses(data: string, keepParentheses?: boolean, level?: number): Promise<string>;
    function dataConverter(data: string): Promise<{ data: string; patterns: string[] }>;
    function setOptions(options: any): void;

    // Export all functions from handle-files
    function readEndpointFile(filePath: string, pathRoute?: string, relativePath?: string, receivedRouteMiddlewares?: any[], restrictedContent?: string, globalSwaggerProperties?: string): Promise<any>;
    function resolvePathFile(path: string, relativePath: string): Promise<string>;
    function setOptionsFiles(options: any): void;

    // Export all constants from statics
    const UNKNOWN: string;
    const TEMPLATE: {
        swagger: null;
        openapi: null;
        info: {
            version: string;
            title: string;
            description: string;
        };
        host: string;
        servers: any[];
        basePath: string;
        tags: any[];
        schemes: string[];
        securityDefinitions: undefined;
        consumes: any[];
        produces: any[];
        paths: {};
        definitions: {};
        components: {};
    };
    const SWAGGER_TAG: string;
    const STRING_BREAKER: string;
    const METHODS: string[];
    const RESERVED_FUNCTIONS: string[];
    const STRING_QUOTE: string;
    const QUOTES: string[];

    // Export all functions from swagger-tags
    function formatDefinitions(def: any, resp?: any, constainXML?: boolean): any;
    function getLanguage(): string;
    function getOpenAPI(): any;
    function getPath(elem: string, autoMode?: boolean): string | false;
    function getMethodTag(data: string, reference?: any): string | false;
    function getForcedEndpoints(aData: string, reference?: any): string[];
    function getIgnoreTag(elem: string): boolean;
    function getAutoTag(data: string): boolean;
    function getParametersTag(data: string, objParameters: any, reference?: any): Promise<any>;
    function getProducesTag(data: string, reference?: any): Promise<string[] | undefined>;
    function getConsumesTag(data: string, reference?: any): Promise<string[] | undefined>;
    function getResponsesTag(data: string, objResponses: any, reference?: any): Promise<any>;
    function getDescription(data: string, reference?: any): string;
    function getTags(data: string, reference?: any): any[];
    function getSecurityTag(data: string, reference?: any): Promise<any[]>;
    function getSummary(data: string, reference?: any): string;
    function getOperationId(data: string, reference?: any): string;
    function getDeprecatedTag(data: string, reference?: any): boolean;
    function getRequestBodyTag(data: string, reference?: any): Promise<any>;
    function setLanguage(newLang: string): void;
    function setOpenAPI(param: any): void;
    function getDisableLogs(): boolean;
    function setDisableLogs(param: boolean): void;
    function getAutoParameterTag(data: string, reference?: any, paramName?: string): boolean;

    // Export all functions from tables
    function getHttpStatusDescription(statusCode: string | number, lang?: string): string;

    // Export all functions from utils
    function fileOrDirectoryExist(path: string): Promise<{ isFile: boolean; isDirectory: boolean } | null>;
    function getExtension(fileName: string): Promise<string>;
    function getFileContent(pathFile: string): Promise<string | null>;
    function isNumeric(n: any): boolean;
    function resolvePatternPath(path: string): Promise<string[] | null>;
    function stackSymbolRecognizer(data: string, startSymbol: string, endSymbol: string, ignoreString?: boolean): Promise<string>;
    function stack0SymbolRecognizer(data: string, startSymbol: string, endSymbol: string, keepSymbol?: boolean): Promise<string>;
    function getFirstPosition(param: string, data: string): number | null;
    function popString(data: string, keepQuote?: boolean): string | null;
    function replaceRange(str: string, start: number, end: number, substitute: string): string;
    function sortParameters(paths: any): Promise<any>;
    function removeRegexes(data: string): string;
    function backupRegexes(data: string): { data: string; regexStorage: any[] };
    function restoreRegexes(data: string, regexStorage: any[]): string;
    function setOptionsUtils(options: any): void;
}

export = swaggerAutogen;
