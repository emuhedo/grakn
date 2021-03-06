#
# GRAKN.AI - THE KNOWLEDGE GRAPH
# Copyright (C) 2018 Grakn Labs Ltd
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#

load("@graknlabs_build_tools//checkstyle:rules.bzl", "checkstyle_test")

java_test(
    name = "in-plays-fragment-test",
    srcs = ["InPlaysFragmentTest.java"],
    test_class = "grakn.core.graql.gremlin.fragment.InPlaysFragmentTest",
    deps = [
        "@graknlabs_graql//java:graql",
        "//server:server",
        "//dependencies/maven/artifacts/com/google/guava:guava",
        "//dependencies/maven/artifacts/org/apache/tinkerpop:gremlin-core"
    ],
    size = "small"
)

java_test(
    name = "isa-explicit-test",
    srcs = ["IsaExplicitTest.java"],
    test_class = "grakn.core.graql.gremlin.fragment.IsaExplicitTest",
    deps = [
        "@graknlabs_graql//java:graql",
        "//server:server",
    ],
    size = "small"
)

java_test(
     name = "out-plays-fragment-test",
     srcs = ["OutPlaysFragmentTest.java"],
     test_class = "grakn.core.graql.gremlin.fragment.OutPlaysFragmentTest",
     deps = [
         "@graknlabs_graql//java:graql",
         "//server:server",
         "//dependencies/maven/artifacts/org/apache/tinkerpop:gremlin-core",
         "//dependencies/maven/artifacts/com/google/guava:guava"
         ],
     size = "small"
)

checkstyle_test(
    name = "checkstyle",
    targets = [
        ":in-plays-fragment-test",
        ":isa-explicit-test",
        ":out-plays-fragment-test"
    ],
)
