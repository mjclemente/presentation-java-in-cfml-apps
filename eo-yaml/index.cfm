<cfscript>
eoyaml = createObject("java", "com.amihaiemil.eoyaml.Yaml");
yaml_file = createObject("java", "java.io.File").init(expandPath("./example.yaml"));

yml_parsed = eoyaml.createYamlInput(yaml_file).readYamlMapping();

iterator = yml_parsed.keys().iterator();

while( iterator.hasNext() ) {
  key = iterator.next();
  writedump(key.value());
  writedump(yml_parsed.value(key.value()));
}

// yaml = eoyaml.createYamlMappingBuilder()
//     .add("name", "Elizabeth")
//     .add(
//         "siblings",
//         eoyaml.createYamlSequenceBuilder()
//             .add("Jane")
//             .add("Mary")
//             .add("Kitty")
//             .add("Lydia")
//             .build()
//     ).add(
//         "suitors",
//         eoyaml.createYamlSequenceBuilder()
//             .add("Darcy")
//             .add("Wickham")
//             .add("Collins")
//             .build()
//     ).build();
// writeDump("#yaml.toString()#");

// while( iterator.hasNext() ) {w
//   key = iterator.next();
//   writedump(key.value());
//   writedump(yml_parsed.value(key.value()));
//   // abort;
//   writeOutput("<br>");
//   thing = student.yamlSequence(key.value());
//   if(isNull(thing)){
//     writeDump(student.string(key.value()));
//   } else {
//     writedump(thing);
//   }
// }
writeDump( var='#yml_parsed.comment().value()#', abort='true' );
</cfscript>
