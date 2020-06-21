(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(1),r=n(9),o=(n(0),n(308)),i={id:"new-generator",title:"Create a New Generator"},s={id:"new-generator",title:"Create a New Generator",description:"Creating a new generator which will become a part of the officially supported generators in OpenAPI Generator is pretty simple. We've created a helper script to bootstrap the operation. Let's look at the files necessary to create a new generator, then an example of bootstrapping a generator using the `new.sh` script in the root of the repository.",source:"@site/../docs/new-generator.md",permalink:"/docs/new-generator",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/new-generator.md",lastUpdatedBy:"William Cheng",lastUpdatedAt:1592029822,sidebar:"docs",previous:{title:"Building the code",permalink:"/docs/contribute-building"},next:{title:"Roadmap",permalink:"/docs/roadmap"}},l=[{value:"Required Files",id:"required-files",children:[]},{value:"new.sh",id:"newsh",children:[{value:"Review Generated Config",id:"review-generated-config",children:[]},{value:"Create templates",id:"create-templates",children:[]},{value:"Build it",id:"build-it",children:[]},{value:"Compile Sample",id:"compile-sample",children:[]},{value:"Verify output",id:"verify-output",children:[]}]}],p={rightToc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Creating a new generator which will become a part of the officially supported generators in OpenAPI Generator is pretty simple. We've created a helper script to bootstrap the operation. Let's look at the files necessary to create a new generator, then an example of bootstrapping a generator using the ",Object(o.b)("inlineCode",{parentName:"p"},"new.sh")," script in the root of the repository."),Object(o.b)("h2",{id:"required-files"},"Required Files"),Object(o.b)("p",null,"The minimum set of files required to create a new generator are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'A "Codegen" file',Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"exists under ",Object(o.b)("inlineCode",{parentName:"li"},"modules/openapi-generator/src/main/java/org/openapitools/codegen/languages/")),Object(o.b)("li",{parentName:"ul"},"defines language options"),Object(o.b)("li",{parentName:"ul"},"defines framework options"),Object(o.b)("li",{parentName:"ul"},"determines OpenAPI feature set"),Object(o.b)("li",{parentName:"ul"},"extends the generation workflow"))),Object(o.b)("li",{parentName:"ul"},"SPI registration",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Above class must be referenced in ",Object(o.b)("inlineCode",{parentName:"li"},"modules/openapi-generator/src/main/resources/META-INF/services/org.openapitools.codegen.CodegenConfig")),Object(o.b)("li",{parentName:"ul"},"Tells the generator that this class exists"),Object(o.b)("li",{parentName:"ul"},"Allows for classpath extension (addition) of generators"))),Object(o.b)("li",{parentName:"ul"},"A minimal template",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Should include a README explaining usage"),Object(o.b)("li",{parentName:"ul"},"Must include an ",Object(o.b)("inlineCode",{parentName:"li"},"api.mustache")),Object(o.b)("li",{parentName:"ul"},"Exists under ",Object(o.b)("inlineCode",{parentName:"li"},"modules/openapi-generator/src/main/resources/")," (plus ",Object(o.b)("inlineCode",{parentName:"li"},"embeddedTemplate")," dir value, see below)"))),Object(o.b)("li",{parentName:"ul"},"Sample scripts under ",Object(o.b)("inlineCode",{parentName:"li"},"./bin")," and ",Object(o.b)("inlineCode",{parentName:"li"},"./bin/windows"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'Gives users a "real life" example of generated output'),Object(o.b)("li",{parentName:"ul"},"Samples are used by CI to verify generators and test for regressions in some cases")))),Object(o.b)("p",null,"Now, let's generate an example generator and then walk through the pieces. At the end, we'll touch on some known sticking points for new generator authors and provide some suggestions."),Object(o.b)("h2",{id:"newsh"},"new.sh"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"new.sh")," script in the root of the project is meant to simplify this process. Run ",Object(o.b)("inlineCode",{parentName:"p"},"./new.sh --help"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Stubs out files for new generators\n\nUsage:\n./new.sh [options]\n    Options:\n    -n  Required. Specify generator name, should be kebab-cased.\n    -c  Create a client generator\n    -s  Create a server generator\n    -d  Create a documentation generator\n    -t  When specified, creates test file(s) for the generator.\n    -h  Display help.\n\nExamples:\n  Create a server generator for ktor:\n  ./new.sh -n kotlin -s\n\n    Creates:\n    modules/openapi-generator/src/main/java/org/openapitools/codegen/languages/KotlinServerCodegen.java\n    modules/openapi-generator/src/main/resources/kotlin-server/README.mustache\n    modules/openapi-generator/src/main/resources/kotlin-server/model.mustache\n    modules/openapi-generator/src/main/resources/kotlin-server/api.mustache\n    bin/windows/kotlin-server-petstore.bat\n    bin/kotlin-server-petstore.sh\n\n  Create a generic C# server generator:\n  ./new.sh -n csharp -s -t\n    Creates:\n    modules/openapi-generator/src/main/java/org/openapitools/codegen/languages/CsharpServerCodegen.java\n    modules/openapi-generator/src/main/resources/csharp-server/README.mustache\n    modules/openapi-generator/src/main/resources/csharp-server/model.mustache\n    modules/openapi-generator/src/main/resources/csharp-server/api.mustache\n    bin/windows/csharp-server-petstore.bat\n    bin/csharp-server-petstore.sh\n    modules/openapi-generator/src/test/java/org/openapitools/codegen/csharp/CsharpServerCodegenTest.java\n    modules/openapi-generator/src/test/java/org/openapitools/codegen/csharp/CsharpServerCodegenModelTest.java\n    modules/openapi-generator/src/test/java/org/openapitools/codegen/csharp/CsharpServerCodegenOptionsTest.java\n    modules/openapi-generator/src/test/java/org/openapitools/codegen/options/CsharpServerCodegenOptionsProvider.java\n")),Object(o.b)("p",null,'This script allows us to define a client, server, schema, or documentation generator. We\'ll focus on the simplest generator (documentation). The other generator types may require heavy extension of the "Config" base class, and these docs could very quickly become outdated. When creating a new generator, please review existing generators as a guideline for implementation.'),Object(o.b)("p",null,"Create a new Markdown generator, specifying CommonMark as the name to avoid conflicting with the built-in Markdown generator."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./new.sh -n common-mark -d\n")),Object(o.b)("p",null,"You should see output similar to the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"Creating modules/openapi-generator/src/main/java/org/openapitools/codegen/languages/CommonMarkDocumentationCodegen.java\nCreating modules/openapi-generator/src/main/resources/common-mark-documentation/README.mustache\nCreating modules/openapi-generator/src/main/resources/common-mark-documentation/model.mustache\nCreating modules/openapi-generator/src/main/resources/common-mark-documentation/api.mustache\nCreating bin/windows/common-mark-documentation-petstore.bat\nCreating bin/common-mark-documentation-petstore.sh\nFinished.\n")),Object(o.b)("h3",{id:"review-generated-config"},"Review Generated Config"),Object(o.b)("p",null,'Beginning with the "Codegen" file (',Object(o.b)("inlineCode",{parentName:"p"},"CommonMarkDocumentationCodegen.java"),"), the constructor was created:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'    public CommonMarkDocumentationCodegen() {\n        super();\n\n        outputFolder = "generated-code" + File.separator + "common-mark";\n        modelTemplateFiles.put("model.mustache", ".zz");\n        apiTemplateFiles.put("api.mustache", ".zz");\n        embeddedTemplateDir = templateDir = "common-mark-documentation";\n        apiPackage = File.separator + "Apis";\n        modelPackage = File.separator + "Models";\n        supportingFiles.add(new SupportingFile("README.mustache", "", "README.md"));\n        // TODO: Fill this out.\n    }\n')),Object(o.b)("p",null,"These options are some defaults which may require updating. Let's look line-by-line at the config."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'outputFolder = "generated-code" + File.separator + "common-mark";\n')),Object(o.b)("p",null,"This is the default output location. This will be ",Object(o.b)("inlineCode",{parentName:"p"},"generated-code/common-mark")," on non-Windows machines and ",Object(o.b)("inlineCode",{parentName:"p"},"generated-code\\common-mark")," on Windows. You may change this to any value you'd like, but a user will almost always provide an output directory."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"When joining paths, always use ",Object(o.b)("inlineCode",{parentName:"p"},"File.seperator"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),' modelTemplateFiles.put("model.mustache", ".zz");\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"model.mustache")," file is registered as the template for model generation. The ",Object(o.b)("inlineCode",{parentName:"p"},"new.sh")," script doesn't have a way to know your intended file extension, so we default to a ",Object(o.b)("inlineCode",{parentName:"p"},".zz")," extension. This ",Object(o.b)("em",{parentName:"p"},"must")," be changed (unless your generator's target extension is ",Object(o.b)("inlineCode",{parentName:"p"},".zz"),"). For this example, you'd change ",Object(o.b)("inlineCode",{parentName:"p"},".zz")," to ",Object(o.b)("inlineCode",{parentName:"p"},".md")," or ",Object(o.b)("inlineCode",{parentName:"p"},".markdown"),", depending on your preference."),Object(o.b)("p",null,"This model template registration will use ",Object(o.b)("inlineCode",{parentName:"p"},"model.mustache")," to generate a new file for every model defined in your API's specification document."),Object(o.b)("p",null,"The path is considered relative to ",Object(o.b)("inlineCode",{parentName:"p"},"embeddedTemplateDir"),", ",Object(o.b)("inlineCode",{parentName:"p"},"templateDir"),", or a library subdirectory (refer to the Java client generator implementation for a prime example)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'apiTemplateFiles.put("api.mustache", ".zz");\n')),Object(o.b)("p",null,"This is the template used for generating API related files. Similar to the above model template, you'll want to change ",Object(o.b)("inlineCode",{parentName:"p"},".zz")," to ",Object(o.b)("inlineCode",{parentName:"p"},".md")," or ",Object(o.b)("inlineCode",{parentName:"p"},".markdown"),"."),Object(o.b)("p",null,"The path is considered relative to ",Object(o.b)("inlineCode",{parentName:"p"},"embeddedTemplateDir"),", ",Object(o.b)("inlineCode",{parentName:"p"},"templateDir"),", or a library subdirectory (refer to the Java client generator implementation for a prime example)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'embeddedTemplateDir = templateDir = "common-mark-documentation";\n')),Object(o.b)("p",null,"This line sets the embedded and template directories to ",Object(o.b)("inlineCode",{parentName:"p"},"common-mark-documentation"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"embeddedTemplateDir")," refers to the directory which will exist under ",Object(o.b)("inlineCode",{parentName:"p"},"modules/openapi-generator/src/main/resources")," and will be published with every release in which your new generator is present."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"templateDir"),' variable refers to the "current" template directory setting, as defined by the user. That is, the user may invoke with ',Object(o.b)("inlineCode",{parentName:"p"},"-t")," or ",Object(o.b)("inlineCode",{parentName:"p"},"--template-directory")," (or plugin option variants), and override this directory."),Object(o.b)("p",null,"Both of these variables exist because the generator will fallback to files under ",Object(o.b)("inlineCode",{parentName:"p"},"embeddedTemplateDir")," if they are not defined in the user's custom template directory."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'apiPackage = File.separator + "Apis";\n')),Object(o.b)("p",null,"This sets the \"package\" location for anything considered an API document. You might want to change this setting if, for instance, your language doesn't support uppercase letters in the path. We don't need to worry about that here."),Object(o.b)("p",null,"Every templated output from ",Object(o.b)("inlineCode",{parentName:"p"},"api.mustache")," (registered via ",Object(o.b)("inlineCode",{parentName:"p"},"apiTemplateFiles")," above) will end up in the directory defined by ",Object(o.b)("inlineCode",{parentName:"p"},"apiPackage")," here."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'modelPackage = File.separator + "Models";\n')),Object(o.b)("p",null,"Similarly, this sets the package for ",Object(o.b)("inlineCode",{parentName:"p"},"Models"),"."),Object(o.b)("p",null,"Every templated output from ",Object(o.b)("inlineCode",{parentName:"p"},"model.mustache")," (registered via ",Object(o.b)("inlineCode",{parentName:"p"},"modelTemplateFiles")," above) will end up in the directory defined by ",Object(o.b)("inlineCode",{parentName:"p"},"modelPackage")," here."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'supportingFiles.add(new SupportingFile("README.mustache", "", "README.md"));\n')),Object(o.b)("p",null,'A "supporting file" is an extra file which isn\'t created once for every operation or model defined in your specification document. It is a single file which may or may not be templated (determined by the extension of the filename).'),Object(o.b)("p",null,"A supporting file only passes through the Mustache template processor if the filename ends in ",Object(o.b)("inlineCode",{parentName:"p"},".mustache"),"."),Object(o.b)("p",null,"The path is considered relative to ",Object(o.b)("inlineCode",{parentName:"p"},"embeddedTemplateDir"),", ",Object(o.b)("inlineCode",{parentName:"p"},"templateDir"),", or a library subdirectory (refer to the Java client generator implementation for a prime example)."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you want your readme to be generic (not templated), just rename the file to README.md and change ",Object(o.b)("inlineCode",{parentName:"p"},"README.mustache")," to ",Object(o.b)("inlineCode",{parentName:"p"},"README.md")," above.")),Object(o.b)("h3",{id:"create-templates"},"Create templates"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"new.sh")," created our three required files. Let's start filling out each of these files."),Object(o.b)("h4",{id:"readmemustache"},"README.mustache"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-mustache"}),'# Documentation for {{appName}}\n\n{{#generateApiDocs}}\n<a name="documentation-for-api-endpoints"></a>\n## Documentation for API Endpoints\n\nAll URIs are relative to *{{{basePath}}}*\n\nClass | Method | HTTP request | Description\n------------ | ------------- | ------------- | -------------\n{{#apiInfo}}{{#apis}}{{#operations}}{{#operation}}*{{classname}}* | [**{{operationId}}**](Apis/{{apiDocPath}}{{classname}}.md#{{operationIdLowerCase}}) | **{{httpMethod}}** {{path}} | {{#summary}}{{{summary}}}{{/summary}}\n{{/operation}}{{/operations}}{{/apis}}{{/apiInfo}}\n{{/generateApiDocs}}\n\n{{#generateModelDocs}}\n<a name="documentation-for-models"></a>\n## Documentation for Models\n\n{{#modelPackage}}\n{{#models}}{{#model}} - [{{{modelPackage}}}.{{{classname}}}](Models/{{modelDocPath}}{{{classname}}}.md)\n{{/model}}{{/models}}\n{{/modelPackage}}\n{{^modelPackage}}\nNo model defined in this package\n{{/modelPackage}}\n{{/generateModelDocs}}\n\n<a name="documentation-for-authorization"></a>{{! TODO: optional documentation for authorization? }}\n## Documentation for Authorization\n\n{{^authMethods}}\nAll endpoints do not require authorization.\n{{/authMethods}}\n{{#authMethods}}\n{{#last}}\nAuthentication schemes defined for the API:\n{{/last}}\n{{/authMethods}}\n{{#authMethods}}\n<a name="{{name}}"></a>\n### {{name}}\n\n{{#isApiKey}}- **Type**: API key\n- **API key parameter name**: {{keyParamName}}\n- **Location**: {{#isKeyInQuery}}URL query string{{/isKeyInQuery}}{{#isKeyInHeader}}HTTP header{{/isKeyInHeader}}\n{{/isApiKey}}\n{{#isBasic}}- **Type**: HTTP basic authentication\n{{/isBasic}}\n{{#isOAuth}}- **Type**: OAuth\n- **Flow**: {{flow}}\n- **Authorization URL**: {{authorizationUrl}}\n- **Scopes**: {{^scopes}}N/A{{/scopes}}\n{{#scopes}}  - {{scope}}: {{description}}\n{{/scopes}}\n{{/isOAuth}}\n\n{{/authMethods}}\n')),Object(o.b)("p",null,"Let's not focus too much on the contents of this file.  You may refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/templating"}),"templating")," for more details on the variables bound to these files and to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/debugging"}),"debugging"),' how to debug the structures. Of note here is that we\'re generating structures in markdown as defined by the objects constructed by our new "Config" class.'),Object(o.b)("h4",{id:"apimustache"},"api.mustache"),Object(o.b)("p",null,"The API documentation might look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-mustache"}),'# {{classname}}{{#description}}\n{{description}}{{/description}}\n\nAll URIs are relative to *{{basePath}}*\n\nMethod | HTTP request | Description\n------------- | ------------- | -------------\n{{#operations}}{{#operation}}[**{{operationId}}**]({{classname}}.md#{{operationId}}) | **{{httpMethod}}** {{path}} | {{#summary}}{{summary}}{{/summary}}\n{{/operation}}{{/operations}}\n\n{{#operations}}\n{{#operation}}\n<a name="{{operationId}}"></a>\n# **{{operationId}}**\n> {{#returnType}}{{returnType}} {{/returnType}}{{operationId}}({{#allParams}}{{{paramName}}}{{#hasMore}}, {{/hasMore}}{{/allParams}})\n\n{{summary}}{{#notes}}\n\n{{notes}}{{/notes}}\n\n### Parameters\n{{^allParams}}This endpoint does not need any parameter.{{/allParams}}{{#allParams}}{{#-last}}\nName | Type | Description  | Notes\n------------- | ------------- | ------------- | -------------{{/-last}}{{/allParams}}\n{{#allParams}} **{{paramName}}** | {{#isPrimitiveType}}**{{dataType}}**{{/isPrimitiveType}}{{^isPrimitiveType}}{{#isFile}}**{{dataType}}**{{/isFile}}{{^isFile}}{{#generateModelDocs}}[**{{dataType}}**]({{baseType}}.md){{/generateModelDocs}}{{^generateModelDocs}}**{{dataType}}**{{/generateModelDocs}}{{/isFile}}{{/isPrimitiveType}}| {{description}} |{{^required}} [optional]{{/required}}{{#defaultValue}} [default to {{defaultValue}}]{{/defaultValue}}{{#allowableValues}} [enum: {{#values}}{{{.}}}{{^-last}}, {{/-last}}{{/values}}]{{/allowableValues}}\n{{/allParams}}\n\n### Return type\n\n{{#returnType}}{{#returnTypeIsPrimitive}}**{{returnType}}**{{/returnTypeIsPrimitive}}{{^returnTypeIsPrimitive}}{{#generateModelDocs}}[**{{returnType}}**]({{returnBaseType}}.md){{/generateModelDocs}}{{^generateModelDocs}}**{{returnType}}**{{/generateModelDocs}}{{/returnTypeIsPrimitive}}{{/returnType}}{{^returnType}}null (empty response body){{/returnType}}\n\n### Authorization\n\n{{^authMethods}}No authorization required{{/authMethods}}{{#authMethods}}[{{name}}](../README.md#{{name}}){{^-last}}, {{/-last}}{{/authMethods}}\n\n### HTTP request headers\n\n - **Content-Type**: {{#consumes}}{{{mediaType}}}{{#hasMore}}, {{/hasMore}}{{/consumes}}{{^consumes}}Not defined{{/consumes}}\n - **Accept**: {{#produces}}{{{mediaType}}}{{#hasMore}}, {{/hasMore}}{{/produces}}{{^produces}}Not defined{{/produces}}\n\n{{/operation}}\n{{/operations}}\n\n')),Object(o.b)("h4",{id:"modelmustache"},"model.mustache"),Object(o.b)("p",null,"The models file could resemble the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-mustache"}),"{{#models}}\n{{#model}}\n# {{{packageName}}}.{{modelPackage}}.{{{classname}}}\n## Properties\n\nName | Type | Description | Notes\n------------ | ------------- | ------------- | -------------\n{{#parent}}\n{{#parentVars}}\n**{{name}}** | {{#isPrimitiveType}}**{{dataType}}**{{/isPrimitiveType}}{{^isPrimitiveType}}[**{{dataType}}**]({{complexType}}.md){{/isPrimitiveType}} | {{description}} | {{^required}}[optional] {{/required}}{{#readOnly}}[readonly] {{/readOnly}}{{#defaultValue}}[default to {{{.}}}]{{/defaultValue}}\n{{/parentVars}}\n{{/parent}}\n{{#vars}}**{{name}}** | {{#isPrimitiveType}}**{{dataType}}**{{/isPrimitiveType}}{{^isPrimitiveType}}[**{{dataType}}**]({{complexType}}.md){{/isPrimitiveType}} | {{description}} | {{^required}}[optional] {{/required}}{{#readOnly}}[readonly] {{/readOnly}}{{#defaultValue}}[default to {{{.}}}]{{/defaultValue}}\n{{/vars}}\n\n[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)\n\n{{/model}}\n{{/models}}\n")),Object(o.b)("h3",{id:"build-it"},"Build it"),Object(o.b)("p",null,"To compile quickly to test this out, you can run ",Object(o.b)("inlineCode",{parentName:"p"},"mvn clean package -DskipTests"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"When implementing a more robust generator, you'll want to run all tests as well: ",Object(o.b)("inlineCode",{parentName:"p"},"mvn clean package"))),Object(o.b)("h3",{id:"compile-sample"},"Compile Sample"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"new.sh")," script created ",Object(o.b)("inlineCode",{parentName:"p"},"bin/common-mark-documentation-petstore.sh"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/sh\n\nSCRIPT="$0"\n\nwhile [ -h "$SCRIPT" ] ; do\n  ls=$(ls -ld "$SCRIPT")\n  link=$(expr "$ls" : \'.*-> \\(.*\\)$\')\n  if expr "$link" : \'/.*\' > /dev/null; then\n    SCRIPT="$link"\n  else\n    SCRIPT=$(dirname "$SCRIPT")/"$link"\n  fi\ndone\n\nif [ ! -d "${APP_DIR}" ]; then\n  APP_DIR=$(dirname "$SCRIPT")/..\n  APP_DIR=$(cd "${APP_DIR}"; pwd)\nfi\n\nexecutable="./modules/openapi-generator-cli/target/openapi-generator-cli.jar"\n\nif [ ! -f "$executable" ]\nthen\n  mvn clean package\nfi\n\n# if you\'ve executed sbt assembly previously it will use that instead.\nexport JAVA_OPTS="${JAVA_OPTS} -Xmx1024M -DloggerPath=conf/log4j.properties"\nags="$@ generate -i modules/openapi-generator/src/test/resources/2_0/petstore.yaml -g common-mark -o samples/documentation/petstore/common/mark"\n\njava ${JAVA_OPTS} -jar ${executable} ${ags}\n')),Object(o.b)("p",null,"This script is often used to apply default options for generation. A common option in most of these script is to define the template directory as the generator's directory under ",Object(o.b)("inlineCode",{parentName:"p"},"resources"),". This allows template maintainers to modify and test out template changes which don't require recompilation of the entire project. You'd still need to recompile the project in full if you add or modify behaviors to the generator (such as adding a ",Object(o.b)("inlineCode",{parentName:"p"},"CliOption"),")."),Object(o.b)("p",null,"Add ",Object(o.b)("inlineCode",{parentName:"p"},"-t modules/openapi-generator/src/main/resources/common-mark-documentation")," to ",Object(o.b)("inlineCode",{parentName:"p"},"ags")," line to simplify the evaluation of template-only modifications:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),'diff --git a/bin/markdown-documentation-petstore.sh b/bin/markdown-documentation-petstore.sh\nindex d816771478..94b4ce6d12 100644\n--- a/bin/markdown-documentation-petstore.sh\n+++ b/bin/markdown-documentation-petstore.sh\n@@ -26,6 +26,6 @@ fi\n\n # if you\'ve executed sbt assembly previously it will use that instead.\n export JAVA_OPTS="${JAVA_OPTS} -Xmx1024M -DloggerPath=conf/log4j.properties"\n-ags="$@ generate -i modules/openapi-generator/src/test/resources/2_0/petstore.yaml -g common-mark -o samples/documentation/petstore/common-mark"\n+ags="$@ generate -t modules/openapi-generator/src/main/resources/common-mark-documentation -i modules/openapi-generator/src/test/resources/2_0/petstore.yaml -g common-mark -o samples/documentation/petstore/common/markdown"\n\n java ${JAVA_OPTS} -jar ${executable} ${ags}\n')),Object(o.b)("h3",{id:"verify-output"},"Verify output"),Object(o.b)("p",null,"Creating a new generator will be an iterative task. Once you've generated the sample, you'll want to try it out. For compiled client/server outputs, this would mean running the code or creating a small sample project to consume your artifact just to make sure it works."),Object(o.b)("p",null,"For markdown, you can open in Visual Studio Code or any other editor with a markdown preview. Not all editors support relative links to other markdown documents. To test the output in this guide, install ",Object(o.b)("inlineCode",{parentName:"p"},"markserv"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --global markserv\n")),Object(o.b)("p",null,"Now, you can serve the output directory directly and test your links:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"markserv samples/documentation/petstore/common/markdown\n")),Object(o.b)("p",null,"That's it! You've created your first generator!"))}c.isMDXComponent=!0},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},m=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?r.a.createElement(b,s({ref:t},p,{components:n})):r.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);