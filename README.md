# GoodData.UI SDK - Live Examples

## Getting Started

You can start the live examples locally in development mode using the `npm run examples` or `yarn examples` commands. This
will start the Webpack dev server.

The application in dev mode works on top of a live project in GoodData platform running in a way that does not require authentication - no registration needed.

## Adding new examples

All example code is located in its [own directory](./src/examples) and categorized into additional subdirectories. Inspect
couple of existing example sections to get a better idea how organize examples and write example so that it includes
source code.

Look for instance at [chart examples](./src/examples/basic) or [execute examples](./src/examples/execution) for inspiration.

To specify data to render, the examples use the MD generated using [catalog-export](../../tools/catalog-export). This output
is in the [src/md](./src/md) directory together with the extensions and modifications of generated objects.

Your new examples should follow this convention. Additional practices to follow:

-   Use full capabilities of sdk-model and use factories and builders for everything

    > If your example code has to fall back to working with plain objects, this is a good indication that we are missing
    > a function in sdk-model.

-   Avoid setting custom `localIds` for modified objects. This is not needed in vast majority of cases. The only
    exception is when example needs to use the exact same measure or attribute twice (with same alias, format, definition)

    > The default local id generated by calling `m.defaultLocalId()` during measure or attribute modification takes all
    > properties into account and will reflect them in the ID.

-   Keep the definitions DRY

### Including example code in the app itself

The app uses `ExampleWithSource` component to enrich your example with additional components that show JavaScript and
TypeScript code behind the example:

-   Webpack asset/source type is used to include the source code
-   JavaScript example code is the TypeScript transpiled using babel. The transpilation happens in webpack, so it is business as usual.

## License

(C) 2017-2021 GoodData Corporation

This project is under commercial license. See [LICENSE](https://github.com/gooddata/gooddata-ui-sdk/blob/master/examples/sdk-examples/LICENSE).