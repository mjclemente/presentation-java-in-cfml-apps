component{

  this.name = "eoyaml_demo";
  this.javaSettings = {
    loadPaths: directoryList(
      path = expandPath( "./lib" ),
      recurse = true,
      type = 'file' )
  };

  public any function onRequestStart( string targetPath ) {
    setting enablecfoutputonly="true";
    return true;
  }

}
