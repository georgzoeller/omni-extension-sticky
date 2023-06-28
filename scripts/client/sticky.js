function createScript()
{
  return {
    description: "Show a sticky note",
    title: "Sticky",
    internal: true,
    exec(args){
        if (args.length == 0)
          return false
        let content = args[0]
        window.client.workbench.showExtension('omni-extension-sticky', {html: content})
        return true;
    }
  }
}

